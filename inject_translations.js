import fs from 'fs';
import path from 'path';

// Read the generated translations
const translationsRaw = fs.readFileSync('./generated_translations.json', 'utf8');
const generatedTranslations = JSON.parse(translationsRaw);

// Read the original translations.ts
const tsFilePath = './src/data/translations.ts';
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

// Build the new translationsMap string
let mapString = 'const translationsMap: Record<LanguageCode, TranslationDictionary> = {\n  en: defaultEnglishTranslation,\n';

for (const [lang, obj] of Object.entries(generatedTranslations)) {
  if (obj) {
    mapString += `  '${lang}': ${JSON.stringify(obj, null, 2)},\n`;
  }
}

mapString += '};\n';

// Replace the old map in the file
const startToken = '// Fallback dictionary map generator for 34 languages';
const endToken = 'export const getTranslation = (code: LanguageCode): TranslationDictionary => {';

const startIndex = tsContent.indexOf(startToken);
const endIndex = tsContent.indexOf(endToken);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = tsContent.substring(0, startIndex) + startToken + '\n' + mapString + '\n' + tsContent.substring(endIndex);
  fs.writeFileSync(tsFilePath, newContent, 'utf8');
  console.log('Successfully injected translations into src/data/translations.ts');
} else {
  console.error('Failed to find replacement tokens in translations.ts');
}
