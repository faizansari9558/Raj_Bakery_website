import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'src', 'data');

const filesToUpdate = ['products.js', 'cakes.js', 'gallery.js', 'locations.js'];

for (const file of filesToUpdate) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace /images/products/xyz.jpg -> /images/optimized/products/xyz.webp
  content = content.replace(/\/images\/products\/([^"'\s]+)\.(jpg|jpeg|png)/g, '/images/optimized/products/$1.webp');
  
  // Replace /images/cakes/xyz.jpg -> /images/optimized/cakes/xyz.webp
  content = content.replace(/\/images\/cakes\/([^"'\s]+)\.(jpg|jpeg|png)/g, '/images/optimized/cakes/$1.webp');

  // Replace /images/bakery/xyz.jpg -> /images/optimized/bakery/xyz.webp
  content = content.replace(/\/images\/bakery\/([^"'\s]+)\.(jpg|jpeg|png)/g, '/images/optimized/bakery/$1.webp');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated paths in ${file}`);
}
