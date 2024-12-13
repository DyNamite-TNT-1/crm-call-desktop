import { Typography, useTheme } from '@mui/material';

import { LANGUAGE_OPTIONS } from '@renderer/base/config/constants';
import CRMSelectBox from '@renderer/crmcall/components/CRMSelectBox';
import { useAppSettingProvider } from '../../AppSettingProvider';

export const LanguageSetting = () => {
  const theme = useTheme();

  const { language, onChangeLocalization } = useAppSettingProvider();

  const onChangeLanguage = (item: any) => {
    onChangeLocalization(item);
  };

  return (
    <div
      className={'h-flex-row'}
      style={{
        width: '100%',
      }}
    >
      <div
        style={{
          width: '25%',
          alignSelf: 'center',
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: '22px',
            fontSize: theme.typography.fontSize,
          }}
        >
          Language
        </Typography>
      </div>
      <div
        style={{
          width: '75%',
        }}
      >
        <CRMSelectBox
          size="small"
          options={LANGUAGE_OPTIONS}
          value={LANGUAGE_OPTIONS.find((value) => {
            return value.keyName === language;
          })}
          onChange={(val) => onChangeLanguage(val.keyName)}
          needConfirmBeforeChange
        />
      </div>
    </div>
  );
};
