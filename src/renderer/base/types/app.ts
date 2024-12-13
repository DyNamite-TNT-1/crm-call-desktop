export type I18n = 'en' | 'ko' | 'vi'

export type ThemeMode = 'light' | 'dark';

export type CallDockPlacement = 'bottom-left' | 'center' | 'bottom-right';

export type DefaultAppConfigProps = {
  i18n: I18n;
  mode: ThemeMode;
  callDockPlacement: CallDockPlacement;
};
