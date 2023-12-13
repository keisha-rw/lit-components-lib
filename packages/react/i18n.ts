import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// TODO: move the translations to JSON files
// TODO: see if we can parse the xlf file to generate the JSON files

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          'video-duration-is': 'Video duration is',
          'minutes-and': 'minutes and',
          'seconds-long': 'seconds long',
          'view-video-transcript': 'View video transcript',
        },
      },
      es: {
        translation: {
          'video-duration-is': 'La duración del vídeo es de',
          'minutes-and': 'minutos y',
          'seconds-long': 'segundos',
          'view-video-transcript': 'Ver la transcripción del video',
        },
      },
    },
    detection: {
      lookupLocalStorage: 'pds-language',
      lookupQuerystring: 'lang',
      order: [
        'localStorage',
        'htmlTag',
        'querystring',
        'cookie',
        'sessionStorage',
        'navigator',
      ],
    },
  });

i18next.languages = ['en', 'es'];

export default i18next;
