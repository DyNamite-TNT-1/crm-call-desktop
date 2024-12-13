export type OptionValue = {
  keyName: string;
  languageKey: string;
  extra?: any;
}

export type OptionValueIcon = OptionValue & {
  icon?: React.ReactElement;
  color?: string;
};

export type LanguageValue = {
  key?: string;
  label: string;
  value: string;
  icon: string;
};
