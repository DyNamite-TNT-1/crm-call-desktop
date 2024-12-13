import { CallDockPlacement, I18n, ThemeMode } from '@renderer/base/types/app';
import { selector } from 'recoil';
import { appConfigAtom } from '../atoms/app';

export const selectorGetThemeMode = selector<ThemeMode>({
  key: 'selectorGetThemeMode',
  get: ({ get }) => {
    return get(appConfigAtom).mode;
  },
});

export const selectorGetLanguage = selector<I18n>({
  key: 'selectorGetLanguage',
  get: ({ get }) => {
    return get(appConfigAtom).i18n;
  },
});

export const selectorGetCallDockPlacement = selector<CallDockPlacement>({
  key: 'selectorGetCallDockPlacement',
  get: ({ get }) => {
    return get(appConfigAtom).callDockPlacement;
  },
});
