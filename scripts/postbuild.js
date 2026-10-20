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

// Copy public/data directory if exists
const dataSrcDir = path.join('public', 'data');
const dataDestDir = path.join('dist', 'data');
if (fs.existsSync(dataSrcDir)) {
  if (!fs.existsSync(dataDestDir)) {
    fs.mkdirSync(dataDestDir, { recursive: true });
  }
  fs.readdirSync(dataSrcDir).forEach(file => {
    fs.copyFileSync(path.join(dataSrcDir, file), path.join(dataDestDir, file));
    console.log(`Copied data/${file} -> dist/data/${file}`);
  });
}

// 2. Preload stylesheet in dist/index.html
const indexPath = path.join('dist', 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  
  const cssMatch = html.match(/<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/);
  if (cssMatch) {
    const cssPath = cssMatch[1];
    const optimizedCss = `<link rel="preload" as="style" href="${cssPath}"><link rel="stylesheet" crossorigin href="${cssPath}">`;
    html = html.replace(cssMatch[0], optimizedCss);
    console.log(`Preloaded primary stylesheet: ${cssPath}`);
  }
  
  fs.writeFileSync(indexPath, html);
  console.log('Updated dist/index.html with preloaded CSS.');

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
    { dir: 'clientes', title: 'Portal de Clientes • Supervisión de Obra 360° | UNO Arquitectos', desc: 'Área privada de supervisión técnica de obra para clientes de UNO Arquitectos. Registro oficial de avances, bitácoras de obra y recorridos 360°.' },
    { dir: 'portal', title: 'Portal de Clientes • Supervisión de Obra 360° | UNO Arquitectos', desc: 'Área privada de supervisión técnica de obra para clientes de UNO Arquitectos. Registro oficial de avances, bitácoras de obra y recorridos 360°.' },
    { dir: 'admin', title: 'Panel de Administración de Proyectos | UNO Arquitectos', desc: 'Panel administrativo para gestión de proyectos, bitácoras y recorridos 360° de UNO Arquitectos.' },
    { dir: 'estudio-arquitectura-tulum', title: 'Estudio de Arquitectura en Tulum | Diseño Tropical y Sostenible', desc: 'Estudio de arquitectura en Tulum líder en diseño contemporáneo tropical, cimentaciones en suelo kárstico y gestoría ambiental. Arq. Ángel Cereceda.' },
    { dir: 'construccion-llave-en-mano-playa-del-carmen', title: 'Construcción Llave en Mano en Playa del Carmen | UNO', desc: 'Construcción llave en mano en Playa del Carmen: contratos a precio cerrado, catálogo paramétrico, ingeniería kárstica y supervisión 360° remota.' },
    { dir: 'diseno-casas-tulum', title: 'Diseño Arquitectónico para Casas en Tulum | Villas UNO', desc: 'Diseño arquitectónico para casas y villas en Tulum. Residencias boutique off-grid, acabados en Chukum natural, maderas de Tzalam y arquitectura pasiva.' },
    { dir: 'arquitectos-riviera-maya', title: 'Arquitectos en Riviera Maya | Tulum, Playa del Carmen & Cancún', desc: 'Firma boutique de arquitectos en Riviera Maya. Diseño y construcción llave en mano para residencias y desarrollos en Tulum, Playa del Carmen y Cancún.' },
    { dir: 'arquitectos-en-tulum', title: 'Arquitectos en Tulum | Estudio Boutique de Arquitectura y Construcción Llave en Mano', desc: 'Estudio boutique de arquitectura y construcción sustentable en Tulum. Cimentaciones en suelo kárstico, acabados y proyectos off-grid.' },
    { dir: 'arquitectos-en-quintana-roo', title: 'Arquitectos en Quintana Roo | Cancún, Playa del Carmen, Tulum & Riviera Maya', desc: 'Estudio de arquitectura boutique y constructora llave en mano en Quintana Roo. Respaldo técnico, licencias de construcción y gestión integral.' },
    { dir: 'blog', title: 'Journal & Blog de Arquitectura | UNO Arquitectos Riviera Maya', desc: 'Artículos técnicos sobre arquitectura tropical, construcción en suelo kárstico, acabados y proyectos en Tulum.' },
    
    // EN subpages
    { dir: 'en/clientes', title: 'Client Portal • 360° Construction Supervision | UNO Arquitectos', desc: 'Private technical supervision portal for UNO Arquitectos clients. Digital construction logbooks, lab certifications, and 360° virtual tours.' },
    { dir: 'en/portal', title: 'Client Portal • 360° Construction Supervision | UNO Arquitectos', desc: 'Private technical supervision portal for UNO Arquitectos clients. Digital construction logbooks, lab certifications, and 360° virtual tours.' },
    { dir: 'en/admin', title: 'Project Admin Dashboard | UNO Arquitectos', desc: 'Administrative dashboard for project and client portal management.' },
    { dir: 'en/estudio-arquitectura-tulum', title: 'Architecture Studio in Tulum | Sustainable Tropical Design', desc: 'Leading architecture studio in Tulum specialized in contemporary tropical design, karstic soil engineering, and environmental permits. Arch. Ángel Cereceda.' },
    { dir: 'en/construccion-llave-en-mano-playa-del-carmen', title: 'Turnkey Construction in Playa del Carmen | UNO Design-Build', desc: 'Turnkey construction in Playa del Carmen: guaranteed fixed-price contracts, parametric budgeting, karstic engineering, and 360° remote supervision.' },
    { dir: 'en/diseno-casas-tulum', title: 'Architectural House Design in Tulum | Luxury Villas UNO', desc: 'Architectural design for houses and villas in Tulum. Luxury off-grid residences, natural Chukum plaster, certified Tzalam hardwoods, and passive cooling.' },
    { dir: 'en/arquitectos-riviera-maya', title: 'Architects in Riviera Maya | Tulum, Playa del Carmen & Cancun', desc: 'Boutique architecture and turnkey construction firm in Riviera Maya. High-end residential and commercial design across Tulum, Playa del Carmen, and Cancun.' },
    { dir: 'en/arquitectos-en-tulum', title: 'Architects in Tulum | Boutique Architecture & Turnkey Construction Studio', desc: 'Boutique architecture studio and turnkey construction in Tulum. Karstic soil foundation engineering, natural finishes, and off-grid estates.' },
    { dir: 'en/arquitectos-en-quintana-roo', title: 'Architects in Quintana Roo | Cancun, Playa del Carmen & Tulum Turnkey Studio', desc: 'Turnkey boutique architecture and construction in Quintana Roo. Technical certitude, municipal permits, and luxury residential estates.' },
    { dir: 'en/blog', title: 'Architecture Journal & Insights | UNO Arquitectos Riviera Maya', desc: 'Technical articles on contemporary tropical architecture, karstic soil engineering, finishes, and turnkey construction.' },

    // IT subpages
    { dir: 'it/clientes', title: 'Area Clienti • Supervisione Cantieri 360° | UNO Arquitectos', desc: 'Area tecnica riservata per i clienti di UNO Arquitectos. Registro ufficiale dei lavori, perizie tecniche e tour virtuali 360°.' },
    { dir: 'it/portal', title: 'Area Clienti • Supervisione Cantieri 360° | UNO Arquitectos', desc: 'Area tecnica riservata per i clienti di UNO Arquitectos. Registro ufficiale dei lavori, perizie tecniche e tour virtuali 360°.' },
    { dir: 'it/estudio-arquitectura-tulum', title: 'Studio di Architettura a Tulum | Design Tropicale e Sostenibile', desc: 'Studio di architettura a Tulum specializzato in design tropicale contemporaneo, ingegneria su suolo carsico e licenze ambientali.' },
    { dir: 'it/construccion-llave-en-mano-playa-del-carmen', title: 'Costruzione Chiavi in Mano a Playa del Carmen | UNO', desc: 'Costruzione chiavi in mano a Playa del Carmen: contratti a prezzo fisso, budget parametrici e supervisione remota 360°.' },
    { dir: 'it/diseno-casas-tulum', title: 'Progettazione Architettonica per Ville a Tulum | UNO', desc: 'Progettazione per ville e case di lusso a Tulum. Residenze off-grid, finiture in Chukum naturale e legni tropicali pregiati.' },
    { dir: 'it/arquitectos-riviera-maya', title: 'Architetti in Riviera Maya | Tulum, Playa del Carmen & Cancún', desc: 'Studio boutique di architetti in Riviera Maya. Progettazione e costruzione chiavi in mano in Quintana Roo.' },
    { dir: 'it/arquitectos-en-tulum', title: 'Architetti a Tulum | Studio Boutique di Architettura e Costruzione', desc: 'Studio boutique di architettura e costruzione chiavi in mano a Tulum. Ingegneria su suolo carsico e progetti sostenibili.' },
    { dir: 'it/arquitectos-en-quintana-roo', title: 'Architetti in Quintana Roo | Cancun, Playa del Carmen & Tulum', desc: 'Studio di architettura e costruzione chiavi in mano in Quintana Roo. Gestione completa e licenze edilizie.' },
    { dir: 'it/blog', title: 'Journal & Blog di Architettura | UNO Arquitectos Riviera Maya', desc: 'Articoli tecnici su architettura tropicale, ingegneria su suoli carsici e costruzioni chiavi in mano.' },

    // FR subpages
    { dir: 'fr/clientes', title: 'Espace Clients • Supervision de Chantier 360° | UNO Arquitectos', desc: 'Espace privé de supervision technique de chantier pour les clients de UNO Arquitectos. Rapports officiels et visites virtuelles 360°.' },
    { dir: 'fr/portal', title: 'Espace Clients • Supervision de Chantier 360° | UNO Arquitectos', desc: 'Espace privé de supervision technique de chantier pour les clients de UNO Arquitectos. Rapports officiels et visites virtuelles 360°.' },
    { dir: 'fr/estudio-arquitectura-tulum', title: 'Studio d\'Architecture à Tulum | Design Tropical et Durable', desc: 'Studio d\'architecture à Tulum leader en design tropical contemporain, ingénierie des sols karstiques et permis environnementaux.' },
    { dir: 'fr/construccion-llave-en-mano-playa-del-carmen', title: 'Construction Clés en Main à Playa del Carmen | UNO', desc: 'Construction clés en main à Playa del Carmen : contrats à prix ferme, devis paramétrique et supervision 360° à distance.' },
    { dir: 'fr/diseno-casas-tulum', title: 'Conception Architecturale de Maisons à Tulum | UNO', desc: 'Conception de villas et résidences de luxe à Tulum. Projets autonomes off-grid, finitions en Chukum naturel et bois nobles.' },
    { dir: 'fr/arquitectos-riviera-maya', title: 'Architectes dans la Riviera Maya | Tulum, Playa del Carmen & Cancún', desc: 'Cabinet boutique d\'architecture dans la Riviera Maya. Conception et construction clés en main à Quintana Roo.' },
    { dir: 'fr/arquitectos-en-tulum', title: 'Architectes à Tulum | Studio Boutique d\'Architecture et Construction', desc: 'Studio boutique d\'architecture et construction clés en main à Tulum. Ingénierie des sols karstiques et projets autonomes.' },
    { dir: 'fr/arquitectos-en-quintana-roo', title: 'Architectes à Quintana Roo | Cancun, Playa del Carmen & Tulum', desc: 'Studio d\'architecture et constructeur clés en main à Quintana Roo. Certitude technique et gestion intégrale.' },
    { dir: 'fr/blog', title: 'Journal & Blog d\'Architecture | UNO Arquitectos Riviera Maya', desc: 'Articles techniques sur l\'architecture tropicale, l\'ingénierie des sols karstiques et la construction clés en main.' }
  ];

  subpages.forEach(sub => {
    let subHtml = html;
    let lang = 'es';
    let baseSlug = sub.dir;

    if (sub.dir.startsWith('en/')) {
      lang = 'en';
      baseSlug = sub.dir.replace(/^en\//, '');
    } else if (sub.dir.startsWith('it/')) {
      lang = 'it';
      baseSlug = sub.dir.replace(/^it\//, '');
    } else if (sub.dir.startsWith('fr/')) {
      lang = 'fr';
      baseSlug = sub.dir.replace(/^fr\//, '');
    }

    const esUrl = `https://unoarquitectos.com/${baseSlug}`;
    const enUrl = `https://unoarquitectos.com/en/${baseSlug}`;
    const itUrl = `https://unoarquitectos.com/it/${baseSlug}`;
    const frUrl = `https://unoarquitectos.com/fr/${baseSlug}`;
    const canonicalUrl = `https://unoarquitectos.com/${sub.dir}`;
    
    subHtml = subHtml.replace(/<html lang="es">/, `<html lang="${lang}">`);
    subHtml = subHtml.replace(/<title>[^<]+<\/title>/, `<title>${sub.title}</title>`);
    subHtml = subHtml.replace(/<meta name="description" content="[^"]+" \/>/, `<meta name="description" content="${sub.desc}" />`);
    subHtml = subHtml.replace(/<link rel="canonical" href="https:\/\/unoarquitectos\.com\/" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    subHtml = subHtml.replace(/<link rel="alternate" hreflang="es" href="https:\/\/unoarquitectos\.com\/" \/>/, `<link rel="alternate" hreflang="es" href="${esUrl}" />`);
    subHtml = subHtml.replace(/<link rel="alternate" hreflang="en" href="https:\/\/unoarquitectos\.com\/en\/" \/>/, `<link rel="alternate" hreflang="en" href="${enUrl}" />`);
    subHtml = subHtml.replace(/<link rel="alternate" hreflang="it" href="https:\/\/unoarquitectos\.com\/it\/" \/>/, `<link rel="alternate" hreflang="it" href="${itUrl}" />`);
    subHtml = subHtml.replace(/<link rel="alternate" hreflang="fr" href="https:\/\/unoarquitectos\.com\/fr\/" \/>/, `<link rel="alternate" hreflang="fr" href="${frUrl}" />`);
    subHtml = subHtml.replace(/<link rel="alternate" hreflang="x-default" href="https:\/\/unoarquitectos\.com\/" \/>/, `<link rel="alternate" hreflang="x-default" href="${esUrl}" />`);
    subHtml = subHtml.replace(/<meta property="og:title" content="[^"]+" \/>/, `<meta property="og:title" content="${sub.title}" />`);
    subHtml = subHtml.replace(/<meta property="og:description" content="[^"]+" \/>/, `<meta property="og:description" content="${sub.desc}" />`);
    subHtml = subHtml.replace(/<meta property="og:url" content="https:\/\/unoarquitectos\.com\/" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
    subHtml = subHtml.replace(/<meta name="twitter:title" content="[^"]+" \/>/, `<meta name="twitter:title" content="${sub.title}" />`);
    subHtml = subHtml.replace(/<meta name="twitter:description" content="[^"]+" \/>/, `<meta name="twitter:description" content="${sub.desc}" />`);
    subHtml = subHtml.replace(/<meta name="twitter:url" content="https:\/\/unoarquitectos\.com\/" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);
    
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
