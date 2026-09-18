import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Check all paths in data and source files
const filesToCheck = [
  'src/data/products.js',
  'src/data/cakes.js',
  'src/data/gallery.js',
  'src/data/locations.js',
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/components/Hero.jsx'
];

let allValid = true;

for (const relFile of filesToCheck) {
  const fullPath = path.join(rootDir, relFile);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');
  
  // Find all /images/... paths
  const matches = content.match(/\/images\/[a-zA-Z0-9_\-\.\/]+/g) || [];
  
  for (const imgPath of matches) {
    const cleanPath = imgPath.replace(/['",\s]/g, '');
    const diskPath = path.join(publicDir, cleanPath);
    if (!fs.existsSync(diskPath)) {
      console.error(`MISSING IMAGE in ${relFile}: ${cleanPath} (Not found on disk: ${diskPath})`);
      allValid = false;
    } else {
      console.log(`OK: ${cleanPath}`);
    }
  }
}

if (allValid) {
  console.log('\n ALL REFERENCED IMAGE PATHS EXIST ON DISK!');
} else {
  console.log('\n❌ SOME REFERENCED IMAGES ARE MISSING!');
}
