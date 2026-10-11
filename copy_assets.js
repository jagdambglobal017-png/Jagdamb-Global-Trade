const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const filesToCopy = [
  {
    src: 'C:/Users/Shivprasad/.gemini/antigravity-cli/brain/f2d4a6d0-62da-4a84-9aa1-3ec35c7800ee/hero_cargo_ship_1786190625580.jpg',
    dest: 'hero_cargo_ship.jpg'
  },
  {
    src: 'C:/Users/Shivprasad/.gemini/antigravity-cli/brain/f2d4a6d0-62da-4a84-9aa1-3ec35c7800ee/about_warehouse_export_1786190647006.jpg',
    dest: 'about_warehouse.jpg'
  },
  {
    src: 'C:/Users/Shivprasad/.gemini/antigravity-cli/brain/f2d4a6d0-62da-4a84-9aa1-3ec35c7800ee/superfood_moringa_1786190665379.jpg',
    dest: 'moringa.jpg'
  },
  {
    src: 'C:/Users/Shivprasad/.gemini/antigravity-cli/brain/f2d4a6d0-62da-4a84-9aa1-3ec35c7800ee/basmati_rice_export_1786190681641.jpg',
    dest: 'basmati_rice.jpg'
  },
  {
    src: 'C:/Users/Shivprasad/.gemini/antigravity-cli/brain/f2d4a6d0-62da-4a84-9aa1-3ec35c7800ee/turmeric_powder_export_1786190701391.jpg',
    dest: 'turmeric.jpg'
  }
];

filesToCopy.forEach(item => {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, path.join(targetDir, item.dest));
    console.log(`Copied ${item.dest}`);
  } else {
    console.warn(`File not found: ${item.src}`);
  }
});
