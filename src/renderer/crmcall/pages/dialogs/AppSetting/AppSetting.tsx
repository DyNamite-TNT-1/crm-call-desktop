import { Button, Divider, Stack, Typography, useTheme } from '@mui/material';
import { CRMTabButton } from '@renderer/crmcall/components/CRMTabButton';
import CRMDialog from '@renderer/crmcall/components/Dialog/CRMDialog';
import useDialogStack, {
  TCDialogProps,
} from '@renderer/crmcall/view_providers/dialogstack/DialogStackProvider';
import React, { useMemo, useState } from 'react';
import Information from './tabs/Information/Information';
import General from './tabs/General/General';
import { AppSettingProvider } from './AppSettingProvider';

type SettingTabName = 'general' | 'information';

type Props = {
  defaultTab: SettingTabName;
};

export const AppSettingDialog = (props: TCDialogProps<Props>) => {
  const { dialogKey, onClose, additionalProps } = props;
  const { removeDialog } = useDialogStack();
  const { defaultTab } = additionalProps || {};

  const handleCloseDialog = () => {
    onClose?.();
    removeDialog(dialogKey);
  };

  return (
    <AppSettingProvider>
      <DialogContent onClose={handleCloseDialog} defaultTab={defaultTab} />
    </AppSettingProvider>
  );
};

const DialogContent = (props: {
  onClose: () => void;
  defaultTab?: SettingTabName;
}) => {
  const { onClose, defaultTab = 'general' } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  const [selectedMenu, setSelectedMenu] = useState<SettingTabName>(defaultTab);

  const handleCloseDialog = () => {
    onClose();
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menu: SettingTabName,
  ) => {
    setSelectedMenu(menu);
  };

  const renderContent = (selectedMenu: SettingTabName) => {
    switch (selectedMenu) {
      case 'general':
        return <General />;
      case 'information':
        return <Information />;
      default:
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {selectedMenu}
          </div>
        );
    }
  };

  const Footer = useMemo(() => {
    return (
      <Stack
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <Divider style={{ width: '100%' }} />
        <Button
          color="primary"
          variant="contained"
          onClick={handleCloseDialog}
          sx={{
            my: 1.5,
          }}
        >
          <Typography variant="body1">Save</Typography>
        </Button>
      </Stack>
    );
  }, []);

  return (
    <CRMDialog
      title={'App Settings'}
      isOpen={true}
      onClose={handleCloseDialog}
      disablePortal={true}
    >
      <div className="h-flex-row h-fill-h h-fill-w">
        <div
          style={{
            width: '25%',
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '12px 16px',
            }}
          >
            <CRMTabButton
              selected={selectedMenu === 'general'}
              title={t('general')}
              onClick={(event) => handleListItemClick(event, 'general')}
            />

            <CRMTabButton
              selected={selectedMenu === 'information'}
              title={t('information')}
              onClick={(event) => handleListItemClick(event, 'information')}
            />
          </div>
        </div>
        <div
          style={{
            width: '75%',
            display: 'flex',
            borderLeftColor: theme.palette.divider,
            borderLeftWidth: 1,
            borderLeftStyle: 'solid',
            overflow: 'auto',
          }}
        >
          {renderContent(selectedMenu)}
        </div>
      </div>
      {Footer}
    </CRMDialog>
  );
};
