import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(publicDir, 'images');

const originalDir = path.join(imagesDir, 'original');
const optimizedDir = path.join(imagesDir, 'optimized');

// Responsive widths to generate
const CARD_WIDTHS = [320, 480, 640, 960];
const HERO_WIDTHS = [480, 768, 1200, 1920];

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function run() {
  console.log('--- STARTING RAJ BAKERY IMAGE OPTIMIZATION ---');
  
  await ensureDir(path.join(originalDir, 'products'));
  await ensureDir(path.join(originalDir, 'cakes'));
  await ensureDir(path.join(originalDir, 'bakery'));

  await ensureDir(path.join(optimizedDir, 'products'));
  await ensureDir(path.join(optimizedDir, 'cakes'));
  await ensureDir(path.join(optimizedDir, 'bakery'));

  const folders = ['bakery', 'cakes', 'products'];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let imageCount = 0;
  let largestOriginal = { name: '', size: 0 };
  let largestOptimized = { name: '', size: 0 };
  
  const report = [];

  for (const folder of folders) {
    const folderPath = path.join(imagesDir, folder);
    if (!fs.existsSync(folderPath)) continue;

    const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    
    for (const file of files) {
      const srcPath = path.join(folderPath, file);
      const originalBackupPath = path.join(originalDir, folder, file);
      
      // 1. Preserve original photo safely
      if (!fs.existsSync(originalBackupPath)) {
        fs.copyFileSync(srcPath, originalBackupPath);
      }

      const stat = fs.statSync(srcPath);
      totalOriginalSize += stat.size;
      imageCount++;

      if (stat.size > largestOriginal.size) {
        largestOriginal = { name: `${folder}/${file}`, size: stat.size };
      }

      const parsed = path.parse(file);
      const baseName = parsed.name;

      let widthsToGen = CARD_WIDTHS;
      if (folder === 'bakery') {
        widthsToGen = HERO_WIDTHS;
      }

      // Read metadata using sharp
      const imageInstance = sharp(srcPath);
      const meta = await imageInstance.metadata();

      // Primary optimized WebP
      const primaryTargetWidth = folder === 'bakery' ? Math.min(meta.width || 1200, 1200) : Math.min(meta.width || 640, 640);
      const primaryOptimizedPath = path.join(optimizedDir, folder, `${baseName}.webp`);
      
      await sharp(srcPath)
        .rotate() // auto-orient
        .resize({ width: primaryTargetWidth, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(primaryOptimizedPath);

      const primaryStat = fs.statSync(primaryOptimizedPath);
      totalOptimizedSize += primaryStat.size;

      if (primaryStat.size > largestOptimized.size) {
        largestOptimized = { name: `${folder}/${baseName}.webp`, size: primaryStat.size };
      }

      // Responsive variants
      for (const w of widthsToGen) {
        if (meta.width && meta.width < w * 0.8) continue;
        const responsivePath = path.join(optimizedDir, folder, `${baseName}-${w}.webp`);
        await sharp(srcPath)
          .rotate()
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: w <= 480 ? 80 : 82, effort: 5 })
          .toFile(responsivePath);
      }

      report.push({
        file: `${folder}/${file}`,
        originalKB: (stat.size / 1024).toFixed(1),
        optimizedKB: (primaryStat.size / 1024).toFixed(1),
        reductionPercent: (((stat.size - primaryStat.size) / stat.size) * 100).toFixed(1) + '%'
      });
    }
  }

  const originalMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const optimizedMB = (totalOptimizedSize / (1024 * 1024)).toFixed(2);
  const totalReduction = (((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1);

  console.log('\n======================================================');
  console.log('IMAGE OPTIMIZATION REPORT');
  console.log('======================================================');
  console.log(`Total images processed: ${imageCount}`);
  console.log(`Original total size:    ${originalMB} MB`);
  console.log(`Optimized total size:   ${optimizedMB} MB (primary webp versions)`);
  console.log(`Overall reduction:      ${totalReduction}%`);
  console.log(`Largest original:       ${largestOriginal.name} (${(largestOriginal.size / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`Largest optimized:      ${largestOptimized.name} (${(largestOptimized.size / 1024).toFixed(1)} KB)`);
  console.log('======================================================\n');

  fs.writeFileSync(
    path.join(rootDir, 'image-optimization-stats.json'),
    JSON.stringify({
      totalImages: imageCount,
      originalTotalBytes: totalOriginalSize,
      originalTotalMB: originalMB,
      optimizedTotalBytes: totalOptimizedSize,
      optimizedTotalMB: optimizedMB,
      reductionPercent: totalReduction + '%',
      largestOriginal: { ...largestOriginal, sizeMB: (largestOriginal.size / (1024 * 1024)).toFixed(2) },
      largestOptimized: { ...largestOptimized, sizeKB: (largestOptimized.size / 1024).toFixed(1) },
      items: report
    }, null, 2)
  );

  console.log('Saved stats to image-optimization-stats.json');
}

run().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
