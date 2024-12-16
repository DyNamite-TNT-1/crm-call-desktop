import i18next from 'i18next';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import LanguageSetting from '@renderer/resources/Language';
import useAppConfig from '../hook/common/useAppConfig';
import { useMounted } from '../components/@electron/ChildWindow/effect';
import { DefaultLsStore } from '../utils/storages/default';
import { defaultAppConfig } from '../store/atoms/app';


i18next.use(initReactI18next).init({
  resources: LanguageSetting.resourcesLanguage,
  fallbackLng: LanguageSetting.defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

const AppConfigInitView = ({ children }: { children: React.ReactNode }) => {
  const { initAppSetting, onChangeLocalization, mode } = useAppConfig();

   useMounted(() => {
     const Ls = DefaultLsStore;
     const configStr = Ls.get('app-global-configs');
     let newConfig = defaultAppConfig;
     if (configStr) {
       newConfig = JSON.parse(configStr);
       initAppSetting(newConfig);
     }
     onChangeLocalization(newConfig.i18n);
   });

  return children;
};

export default AppConfigInitView;
