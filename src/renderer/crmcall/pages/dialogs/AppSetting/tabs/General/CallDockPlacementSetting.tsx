import { Typography, useTheme } from '@mui/material';

import { useAppSettingProvider } from '../../AppSettingProvider';
import CRMSelectBox from '@renderer/crmcall/components/CRMSelectBox';
import { CALL_DOCK_PLACEMENT_OPTIONS } from '@renderer/base/config/constants';
import { CallDockPlacement } from '@renderer/base/types/app';

const CallDockPlacementSetting = () => {
  const theme = useTheme();
  const { callDockPlacement, onChangeCallDockPlacement } =
    useAppSettingProvider();

  const handleChangeCallDockPlacement = (nPlacement: CallDockPlacement) => {
    onChangeCallDockPlacement(nPlacement);
  };

  return (
    <div
      className={'h-flex-row'}
      style={{
        paddingTop: '16px',
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
          Call Dock
        </Typography>
      </div>
      <div
        style={{
          width: '75%',
        }}
      >
        <CRMSelectBox
          size="small"
          options={CALL_DOCK_PLACEMENT_OPTIONS}
          value={CALL_DOCK_PLACEMENT_OPTIONS.find((value) => {
            return value.keyName === callDockPlacement;
          })}
          onChange={(val) =>
            handleChangeCallDockPlacement(val.keyName as CallDockPlacement)
          }
          needConfirmBeforeChange
        />
      </div>
    </div>
  );
};

export default CallDockPlacementSetting;
