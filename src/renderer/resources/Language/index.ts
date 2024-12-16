import { LANGUAGES } from '@renderer/base/config/constants';

const LanguageSetting = {
  defaultLanguage: 'en',
  languageSupport: LANGUAGES,
  resourcesLanguage: {
    en: {
      translation: require('./data/lang_en.json'),
    },
    vi: {
      translation: require('./data/lang_vi.json'),
    },
    ko: {
      translation: require('./data/lang_ko.json'),
    },
  },
};

export default LanguageSetting;
