import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('--- Starting Postbuild Optimization ---');

// 1. Copy config files from public to dist
const configFiles = ['.htaccess', 'robots.txt', 'sitemap.xml', 'llms.txt'];
configFiles.forEach(f => {
  const src = path.join('public', f);
  const dest = path.join('dist', f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${f} -> dist/${f}`);
  }
});

// Copy public/api directory if exists
const apiSrcDir = path.join('public', 'api');
const apiDestDir = path.join('dist', 'api');
if (fs.existsSync(apiSrcDir)) {
  if (!fs.existsSync(apiDestDir)) {
    fs.mkdirSync(apiDestDir, { recursive: true });
  }
  fs.readdirSync(apiSrcDir).forEach(file => {
    fs.copyFileSync(path.join(apiSrcDir, file), path.join(apiDestDir, file));
    console.log(`Copied api/${file} -> dist/api/${file}`);
  });
}

// 2. Make stylesheet non-blocking in dist/index.html
const indexPath = path.join('dist', 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Transform render-blocking CSS link to non-blocking preload + media=print swap
  const cssMatch = html.match(/<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/);
  if (cssMatch) {
    const cssPath = cssMatch[1];
    const nonBlockingCss = `<link rel="preload" as="style" href="${cssPath}"><link rel="stylesheet" href="${cssPath}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${cssPath}"></noscript>`;
    html = html.replace(cssMatch[0], nonBlockingCss);
    console.log(`Optimized stylesheet loading to non-blocking: ${cssPath}`);
  }
  
  fs.writeFileSync(indexPath, html);
  console.log('Updated dist/index.html with non-blocking CSS.');
}

// 3. Mirror latest assets to ensure legacy cache hits
const assetsDir = path.join('dist', 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const mainCss = files.find(f => f.startsWith('index-') && f.endsWith('.css'));
  
  if (mainJs) {
    ['index-B8Nap_2K.js', 'index-B38eT26X.js', 'index-7uDuNS0G.js', 'index-Cjub3CoV.js'].forEach(alias => {
      if (alias !== mainJs) {
        fs.copyFileSync(path.join(assetsDir, mainJs), path.join(assetsDir, alias));
      }
    });
    console.log(`Mirrored main JS: ${mainJs}`);
  }
  
  if (mainCss) {
    ['index-C-5dqcFl.css', 'index-CDX4qRgy.css', 'index-BAyhyOGH.css', 'index-D5xNzEcK.css'].forEach(alias => {
      if (alias !== mainCss) {
        fs.copyFileSync(path.join(assetsDir, mainCss), path.join(assetsDir, alias));
      }
    });
    console.log(`Mirrored main CSS: ${mainCss}`);
  }
}

// 4. Create dist-hostinger.zip
console.log('Generating dist-hostinger.zip...');
try {
  execSync('powershell -Command "Compress-Archive -Path dist\\* -DestinationPath dist-hostinger.zip -Force"');
  const stat = fs.statSync('dist-hostinger.zip');
  console.log(`dist-hostinger.zip created successfully (${(stat.size / 1024 / 1024).toFixed(2)} MB).`);
} catch (err) {
  console.error('Error generating zip:', err);
}

console.log('--- Postbuild Optimization Complete ---');
