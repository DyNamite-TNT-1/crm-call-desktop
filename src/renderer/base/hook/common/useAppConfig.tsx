import { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import eq from 'lodash/eq';
import i18n from 'i18next';

import { appConfigAtom } from '@renderer/base/store/atoms/app';
import {
  CallDockPlacement,
  DefaultAppConfigProps,
  I18n,
  ThemeMode,
} from '@renderer/base/types/app';

import { DefaultLsStore } from '@renderer/base/utils/storages/default';

const Ls = DefaultLsStore;

type AppConfigContextType = DefaultAppConfigProps & {
  onChangeLocalization: (lang: I18n) => Promise<void>;
  onChangeMode: (mode: ThemeMode) => void;
  onChangeCallDockPlacement: (placement: CallDockPlacement) => void;
  initAppSetting: (nConfig: DefaultAppConfigProps) => void;
};

const AppConfigContext = createContext<AppConfigContextType | null>(null);

export const AppConfigProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [config, setConfig] =
    useRecoilState<DefaultAppConfigProps>(appConfigAtom);

  // save app config
  const handleAppSetting = (nConfig: {
    i18n?: I18n;
    mode?: ThemeMode;
    callDockPlacement?: CallDockPlacement;
  }) => {
    setConfig((config) => {
      let resultConfig = {
        ...config,
        i18n: nConfig.i18n ?? config.i18n,
        mode: nConfig.mode ?? config.mode,
        callDockPlacement:
          nConfig.callDockPlacement ?? config.callDockPlacement,
      } as DefaultAppConfigProps;

      Ls.set('app-global-configs', JSON.stringify(resultConfig));
      return resultConfig;
    });
  };

  return (
    <AppConfigContext.Provider
      value={{
        ...config,
        onChangeLocalization: async (lang: I18n) => {
          Ls.set('language-system', lang);
          handleAppSetting({ i18n: lang });
          //change language view
          await i18n.changeLanguage(lang);
        },
        onChangeMode: (mode: ThemeMode) => {
          handleAppSetting({ mode });
        },
        onChangeCallDockPlacement: (placement: CallDockPlacement) => {
          handleAppSetting({ callDockPlacement: placement });
        },

        initAppSetting: (nConfig: DefaultAppConfigProps) => {
          if (!eq(nConfig, config)) {
            setConfig(nConfig);
          }
        },
      }}
    >
      {children}
    </AppConfigContext.Provider>
  );
};

const useAppConfig = () => {
  const context = useContext(AppConfigContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAppConfig;
