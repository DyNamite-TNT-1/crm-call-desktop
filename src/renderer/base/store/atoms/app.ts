import { DefaultAppConfigProps } from '@renderer/base/types/app';
import { atom } from 'recoil';

const defaultAppConfig: DefaultAppConfigProps = {
  i18n: 'en',
  mode: 'light',
  callDockPlacement: 'center',
};

export const appConfigAtom = atom<DefaultAppConfigProps>({
  key: 'appConfigAtom',
  default: {
    ...defaultAppConfig,
  } as DefaultAppConfigProps,
});