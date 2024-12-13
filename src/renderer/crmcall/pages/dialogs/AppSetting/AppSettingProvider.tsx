
import { createContext, useContext } from 'react';
import { useRecoilValue } from 'recoil';

import useAppConfig from '@renderer/base/hook/common/useAppConfig';
import { selectorGetCallDockPlacement, selectorGetLanguage, selectorGetThemeMode } from '@renderer/base/store/selector/app';
import {
  CallDockPlacement,
  I18n,
  ThemeMode,
} from '@renderer/base/types/app';

type AppSettingContextType = {
  themeMode: ThemeMode;
  language: I18n;
  callDockPlacement: CallDockPlacement;
  onChangeMode: (theme: ThemeMode) => void;
  onChangeLocalization: (lang: I18n) => void;
  onChangeCallDockPlacement: (placement: CallDockPlacement) => void;
};

const AppSettingContext = createContext<AppSettingContextType | null>(null);

export const AppSettingProvider = (props: { children: React.ReactElement }) => {
  const { children } = props;

  const themeMode = useRecoilValue(selectorGetThemeMode);
  const language = useRecoilValue(selectorGetLanguage);
  const callDockPlacement = useRecoilValue(selectorGetCallDockPlacement);

  const {
    onChangeMode,
    onChangeLocalization,
    onChangeCallDockPlacement,
  } = useAppConfig();

  return (
    <AppSettingContext.Provider
      value={{
        themeMode,
        language,
        callDockPlacement,
        onChangeMode,
        onChangeLocalization,
        onChangeCallDockPlacement,
      }}
    >
      {children}
    </AppSettingContext.Provider>
  );
};

export const useAppSettingProvider = () => {
  const contextAppSetting = useContext(AppSettingContext);
  if (!contextAppSetting)
    throw new Error('context must be use inside provider');
  return contextAppSetting;
};
