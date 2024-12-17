import { useMemo } from 'react';
import {
  LogoutDialogProvider,
  useLogoutDialogProvider,
} from './LogoutDialogProvider';
import CRMDialog from '@renderer/crmcall/components/Dialog/CRMDialog';
import useDialogStack, {
  EnhancedDialogProps,
} from '@renderer/crmcall/view_providers/dialogstack/DialogStackProvider';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LogoutDialog = (props: EnhancedDialogProps) => {
  const { dialogKey, onClose } = props;
  const { removeDialog } = useDialogStack();

  const handleCloseDialog = () => {
    onClose?.();
    removeDialog(dialogKey);
  };

  return (
    <LogoutDialogProvider>
      <LogoutDialogContent onClose={handleCloseDialog} />
    </LogoutDialogProvider>
  );
};

export default LogoutDialog;

const LogoutDialogContent = (props: { onClose: () => void }) => {
  const { onClose } = props;

  const theme = useTheme();
  const { t } = useTranslation();

  const { onLogout } = useLogoutDialogProvider();

  const handleCloseDialog = () => {
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  const Footer = useMemo(() => {
    return (
      <Stack
        alignItems="center"
        direction="row"
        sx={{
          borderTop: `1px solid ${theme.palette.divider}`,
          p: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Button color="inherit" variant="text" onClick={handleLogout}>
          {t('clear_logout')}
        </Button>
        <Button color="primary" variant="text" onClick={handleLogout}>
          {t('logout')}
        </Button>
      </Stack>
    );
  }, []);

  return (
    <CRMDialog
      title={t('do_you_want_logout')}
      isOpen={true}
      onClose={handleCloseDialog}
      disablePortal={true}
      size={'xs'}
    >
      <div
        style={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="subtitle2">{t('clear_logout_message')}</Typography>
      </div>
      {Footer}
    </CRMDialog>
  );
};
