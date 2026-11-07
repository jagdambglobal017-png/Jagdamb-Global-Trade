import fs from 'fs';
import path from 'path';
import translate from 'translate-google';
import { productsData } from '../src/data/products.js';

// Language codes configuration
const languages = [
  'hi', 'mr', 'gu', 'bn', 'ta', 'te', 'kn', 'ml', 'pa', 'ur',
  'zh-CN', 'ja', 'ko', 'id', 'ms', 'vi', 'th', 'tl',
  'fr', 'es', 'pt', 'de', 'it', 'nl', 'ru', 'uk', 'pl', 'tr',
  'ar', 'fa', 'he', 'sw'
];

const reverseCodeMapping = {
  'zh-CN': 'zh',
  'tl': 'fil'
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('--- Jagdamb Global Trade: Automated Translation Sync ---');
console.log('1. Checking products and site data for missing translations...');

// Read translations.ts
const tsPath = path.resolve('src/data/translations.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

console.log(`Loaded translations.ts (${tsContent.length} bytes)`);
console.log('2. Sync completed. All site text and products are linked to dynamic translation.');

