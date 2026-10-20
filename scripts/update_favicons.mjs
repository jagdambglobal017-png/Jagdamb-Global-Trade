import fs from 'fs';
import path from 'path';

const logoPath = path.resolve('public/logo.png');
const logoBuffer = fs.readFileSync(logoPath);
const base64Data = logoBuffer.toString('base64');

// 1. Copy logo.png to public/favicon.ico and public/favicon.png
fs.writeFileSync(path.resolve('public/favicon.ico'), logoBuffer);
fs.writeFileSync(path.resolve('public/favicon.png'), logoBuffer);

// 2. Generate updated public/assets/logo.svg that embeds the exact base64 data URI
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/png;base64,${base64Data}" width="512" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>
`;

fs.writeFileSync(path.resolve('public/assets/logo.svg'), svgContent, 'utf-8');

console.log('Successfully updated favicon.ico, favicon.png, and public/assets/logo.svg with base64 embedded logo.');
