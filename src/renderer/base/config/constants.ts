import { LanguageValue, OptionValue } from '../types/common';

export const LANGUAGES: LanguageValue[] = [
  { key: 'en', label: 'English', value: 'en', icon: 'gb' },
  { key: 'ko', label: '한국어', value: 'ko', icon: 'kr' },
  { key: 'vi', label: 'Tiếng Việt', value: 'vi', icon: 'vn' },
  // { key: 'jp', label: '日本語', value: 'jp', icon: 'jp' },
  // { key: 'zh', label: '中文', value: 'zh', icon: 'cn' },
  // { key: 'ido', label: 'Indonesian', value: 'ido', icon: 'id' },
];

export const LANGUAGE_OPTIONS: OptionValue[] = LANGUAGES.map((lang) => {
  return { keyName: lang.value, languageKey: lang.label };
});

export const CALL_DOCK_PLACEMENT_OPTIONS: OptionValue[] = [
  {
    keyName: 'bottom-left',
    languageKey: 'Bottom Left',
  },
  {
    keyName: 'center',
    languageKey: 'Center',
  },
  {
    keyName: 'bottom-right',
    languageKey: 'Bottom Right',
  },
];
