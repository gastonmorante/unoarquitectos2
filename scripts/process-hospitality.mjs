import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userUploadDir = 'C:\\Users\\Pelon\\.gemini\\antigravity\\brain\\b2cb94b7-f5b3-4b9d-a5b3-3713d0c278ad\\.user_uploaded';
const outputDir = 'd:\\Uno arquitectos\\public\\projects\\hospitalidad';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  { file: 'media_1786244927761.jpg', out: 'hospitalidad-santuario-arcos.jpg' },
  { file: 'media_1786244927833.jpg', out: 'hospitalidad-sendero-selva.jpg' },
  { file: 'media_1786244927848.jpg', out: 'hospitalidad-domo-organico.jpg' },
  { file: 'media_1786244927892.jpg', out: 'hospitalidad-suite-mirador.jpg' },
];

async function processHospitalityImages() {
  for (const imgInfo of images) {
    const inputPath = path.join(userUploadDir, imgInfo.file);
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
    
    // Sample patch from adjacent floor/wall area
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

    console.log(`Saved clean hospitality image to: ${outputPath}`);
  }
}

processHospitalityImages().catch(console.error);
