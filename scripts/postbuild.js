import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('--- Starting Postbuild Optimization ---');

// 1. Copy config files from public to dist
const configFiles = ['.htaccess', 'robots.txt', 'sitemap.xml', 'llms.txt', '404.html', 'manifest.webmanifest'];
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

  // Generate Localized Static HTML Entrypoints (en, it, fr, and subpages)
  const localizedMeta = {
    en: {
      lang: 'en',
      title: 'UNO Arquitectos | Architecture that belongs. Spaces that endure.',
      description: 'We craft spaces that elevate — those who inhabit them, those who build them, the land that welcomes them, and the community that surrounds them. Boutique architecture and turnkey construction studio in Riviera Maya (Tulum, Playa del Carmen, Cancun).',
      canonical: 'https://unoarquitectos.com/en/',
      ogTitle: 'UNO Arquitectos | Meaningful Design. Disciplined Construction.',
      ogDesc: 'Boutique residential architecture and turnkey construction in the Riviera Maya (Tulum, Playa del Carmen, Cancun).'
    },
    it: {
      lang: 'it',
      title: 'UNO Arquitectos | Architettura che appartiene. Spazi che durano.',
      description: 'Materializziamo spazi che aggiungono valore — a chi li abita, a chi li costruisce, al luogo che li accoglie e alla comunità circostante. Studio boutique di architettura e costruzione chiavi in mano nella Riviera Maya (Tulum, Playa del Carmen, Cancún).',
      canonical: 'https://unoarquitectos.com/it/',
      ogTitle: 'UNO Arquitectos | Design con senso. Costruzione con criterio.',
      ogDesc: 'Studio boutique di architettura residenziale e costruzione chiavi in mano nella Riviera Maya (Tulum, Playa del Carmen, Cancún).'
    },
    fr: {
      lang: 'fr',
      title: 'UNO Arquitectos | Une architecture qui appartient. Des espaces qui durent.',
      description: 'Nous matérialisons des espaces qui apportent une valeur ajoutée — à ceux qui les habitent, ceux qui les construisent, au lieu qui les accueille et à la communauté. Studio boutique d\'architecture et construction clés en main dans la Riviera Maya (Tulum, Playa del Carmen, Cancún).',
      canonical: 'https://unoarquitectos.com/fr/',
      ogTitle: 'UNO Arquitectos | Design avec sens. Construction avec rigueur.',
      ogDesc: 'Studio boutique d\'architecture résidentielle et construction clés en main dans la Riviera Maya (Tulum, Playa del Carmen, Cancún).'
    }
  };

  Object.entries(localizedMeta).forEach(([code, meta]) => {
    let locHtml = html;
    locHtml = locHtml.replace(/<html lang="es">/, `<html lang="${meta.lang}">`);
    locHtml = locHtml.replace(/<title>[^<]+<\/title>/, `<title>${meta.title}</title>`);
    locHtml = locHtml.replace(/<meta name="description" content="[^"]+" \/>/, `<meta name="description" content="${meta.description}" />`);
    locHtml = locHtml.replace(/<link rel="canonical" href="https:\/\/unoarquitectos\.com\/" \/>/, `<link rel="canonical" href="${meta.canonical}" />`);
    locHtml = locHtml.replace(/<meta property="og:title" content="[^"]+" \/>/, `<meta property="og:title" content="${meta.ogTitle}" />`);
    locHtml = locHtml.replace(/<meta property="og:description" content="[^"]+" \/>/, `<meta property="og:description" content="${meta.ogDesc}" />`);
    locHtml = locHtml.replace(/<meta property="og:url" content="https:\/\/unoarquitectos\.com\/" \/>/, `<meta property="og:url" content="${meta.canonical}" />`);

    const langDir = path.join('dist', code);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }
    fs.writeFileSync(path.join(langDir, 'index.html'), locHtml, 'utf8');
    console.log(`Generated localized static HTML entry: dist/${code}/index.html`);
  });

  // Generate subpage static entrypoints
  const subpages = [
    { dir: 'arquitectos-en-tulum', title: 'Arquitectos en Tulum | Estudio Boutique de Arquitectura y Construcción Llave en Mano', desc: 'Estudio boutique de arquitectura y construcción sustentable en Tulum. Cimentaciones en suelo kárstico, acabados en Chukum y proyectos off-grid.' },
    { dir: 'arquitectos-en-quintana-roo', title: 'Arquitectos en Quintana Roo | Cancún, Playa del Carmen, Tulum & Riviera Maya', desc: 'Estudio de arquitectura boutique y constructora llave en mano en Quintana Roo. Respaldo técnico, licencias de construcción y gestión integral.' },
    { dir: 'blog', title: 'Journal & Blog de Arquitectura | UNO Arquitectos Riviera Maya', desc: 'Artículos técnicos sobre arquitectura tropical, construcción en suelo kárstico, acabados en Chukum natural y proyectos en Tulum.' },
    { dir: 'en/arquitectos-en-tulum', title: 'Architects in Tulum | Boutique Architecture & Turnkey Construction Studio', desc: 'Boutique architecture studio and turnkey construction in Tulum. Karstic soil foundation engineering, natural Chukum plaster, and off-grid estates.' },
    { dir: 'en/arquitectos-en-quintana-roo', title: 'Architects in Quintana Roo | Cancun, Playa del Carmen & Tulum Turnkey Studio', desc: 'Turnkey boutique architecture and construction in Quintana Roo. Technical certitude, municipal permits, and luxury residential estates.' },
    { dir: 'en/blog', title: 'Architecture Journal & Insights | UNO Arquitectos Riviera Maya', desc: 'Technical articles on contemporary tropical architecture, karstic soil engineering, Chukum plaster, and turnkey construction.' }
  ];

  subpages.forEach(sub => {
    let subHtml = html;
    subHtml = subHtml.replace(/<title>[^<]+<\/title>/, `<title>${sub.title}</title>`);
    subHtml = subHtml.replace(/<meta name="description" content="[^"]+" \/>/, `<meta name="description" content="${sub.desc}" />`);
    subHtml = subHtml.replace(/<link rel="canonical" href="https:\/\/unoarquitectos\.com\/" \/>/, `<link rel="canonical" href="https://unoarquitectos.com/${sub.dir}" />`);
    
    const targetDir = path.join('dist', sub.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'index.html'), subHtml, 'utf8');
    console.log(`Generated static entrypoint: dist/${sub.dir}/index.html`);
  });
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

// 4. Create deployment zip packages with Unix permissions (0755 dirs, 0644 files) for cPanel/Apache
console.log('Generating deployment zip packages (dist-hostgator.zip, dist.zip)...');
try {
  execSync('python scripts/make-zip.py', { stdio: 'inherit' });
  
  // Mirror to Downloads folder for convenient user access
  const downloadsPath = 'C:\\Users\\PC\\Downloads\\dist-hostgator.zip';
  if (fs.existsSync('dist-hostgator.zip')) {
    try {
      fs.copyFileSync('dist-hostgator.zip', downloadsPath);
      console.log(`Mirrored deployment package to: ${downloadsPath}`);
    } catch {}
  }
} catch (err) {
  console.error('Error generating zip:', err);
}

console.log('--- Postbuild Optimization Complete ---');
