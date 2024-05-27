import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next
    .init({
        fallbackLng: 'ar', // default language
        debug: true, // set to false in production
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            // options for language detection
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
