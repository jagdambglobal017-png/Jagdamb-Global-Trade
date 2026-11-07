import { LanguageCode } from '../types/translation';

// Map internal language codes to Google Translate codes
const gtCodeMap: Record<string, string> = {
  fil: 'tl',
  'zh-CN': 'zh-CN',
  zh: 'zh-CN',
};

/**
 * Triggers Google Translate on the client side to translate dynamic/untranslated DOM text
 * right away whenever new data or text is added to the website.
 */
export const triggerGoogleTranslate = (langCode: LanguageCode) => {
  if (typeof window === 'undefined') return;

  const targetCode = gtCodeMap[langCode] || langCode;
  const hostname = window.location.hostname;

  // Set the standard googtrans cookie used by Google Website Translator
  if (targetCode === 'en') {
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    if (hostname) {
      document.cookie = `googtrans=; path=/; domain=${hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      // Also try with dot prefix for parent domain
      document.cookie = `googtrans=; path=/; domain=.${hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
  } else {
    const cookieValue = `/en/${targetCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    if (hostname) {
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${hostname};`;
    }
  }

  // Trigger Google Translate hidden combo dropdown if initialized
  const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (selectElem) {
    selectElem.value = targetCode;
    selectElem.dispatchEvent(new Event('change', { bubbles: true }));
  }
};

