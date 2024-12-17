import { DefaultAppConfigProps } from '@renderer/base/types/app';
import { atom } from 'recoil';

export const defaultAppConfig: DefaultAppConfigProps = {
  i18n: 'en',
  mode: 'light',
  presetColor: 'default',
  callDockPlacement: 'center',
};

export const appConfigAtom = atom<DefaultAppConfigProps>({
  key: 'appConfigAtom',
  default: {
    ...defaultAppConfig,
  } as DefaultAppConfigProps,
});
