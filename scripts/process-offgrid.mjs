import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Pelon\\.gemini\\antigravity\\brain\\b2cb94b7-f5b3-4b9d-a5b3-3713d0c278ad';
const outputDir = 'd:\\Uno arquitectos\\public\\projects\\offgrid';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  { file: 'offgrid_villa_exterior_1786245210348.jpg', out: 'offgrid-villa-cenote.jpg' },
  { file: 'offgrid_living_open_1786245226255.jpg', out: 'offgrid-pabellon-living.jpg' },
  { file: 'offgrid_solar_terrace_1786245245681.jpg', out: 'offgrid-rooftop-solar.jpg' },
  { file: 'offgrid_master_suite_1786245270343.jpg', out: 'offgrid-suite-tulum.jpg' },
];

async function processOffgridImages() {
  for (const imgInfo of images) {
    const inputPath = path.join(brainDir, imgInfo.file);
    const outputPath = path.join(outputDir, imgInfo.out);

    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const { width, height } = metadata;

    console.log(`Processing ${imgInfo.file}: ${width}x${height}`);

    // Watermark in Gemini images is at bottom-right corner
    const patchWidth = 100;
    const patchHeight = 100;
    const wmX = width - 120;
    const wmY = height - 120;
    
    // Sample patch from adjacent area
    const sampleX = width - 240;
    const sampleY = height - 120;

    const patchBuffer = await sharp(inputPath)
      .extract({ left: sampleX, top: sampleY, width: patchWidth, height: patchHeight })
      .blur(1.5)
      .toBuffer();

    await sharp(inputPath)
      .composite([
        {
          input: patchBuffer,
          top: wmY,
          left: wmX,
          blend: 'over'
        }
      ])
      .jpeg({ quality: 95 })
      .toFile(outputPath);

    console.log(`Saved clean off-grid image to: ${outputPath}`);
  }
}

processOffgridImages().catch(console.error);
