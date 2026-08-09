import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userUploadDir = 'C:\\Users\\Pelon\\.gemini\\antigravity\\brain\\b2cb94b7-f5b3-4b9d-a5b3-3713d0c278ad\\.user_uploaded';
const outputDir = 'd:\\Uno arquitectos\\public\\projects\\lavazza';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  { file: 'media_1786244233343.jpg', out: 'lavazza-facade.jpg' },
  { file: 'media_1786244233361.jpg', out: 'lavazza-counter-detail.jpg' },
  { file: 'media_1786244233651.jpg', out: 'lavazza-interior.jpg' },
  { file: 'media_1786244233667.jpg', out: 'lavazza-kiosk-terrace.jpg' },
];

async function processImages() {
  for (const imgInfo of images) {
    const inputPath = path.join(userUploadDir, imgInfo.file);
    const outputPath = path.join(outputDir, imgInfo.out);

    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const { width, height } = metadata;

    console.log(`Processing ${imgInfo.file}: ${width}x${height}`);

    // Watermark in Gemini images is typically at bottom-right corner:
    // width - 110 to width - 20, height - 110 to height - 20
    // We can sample a patch from nearby (e.g. offset by 70px to the left or up) and composite over the watermark area
    const patchWidth = 100;
    const patchHeight = 100;
    const wmX = width - 120;
    const wmY = height - 120;
    
    // Sample patch from just left of the watermark area
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

    console.log(`Saved clean image to: ${outputPath}`);
  }
}

processImages().catch(console.error);
