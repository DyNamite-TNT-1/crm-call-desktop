import React from 'react';
import { SettingsOutlined, Call, Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useDialogStack from '@renderer/crmcall/view_providers/dialogstack/DialogStackProvider';
import useAuth from '@renderer/base/app/auth/AuthProvider';

const HomePage = () => {
  const { addDialog } = useDialogStack();
  const { logout } = useAuth();

  const handleOpenAppSetting = () => {
    addDialog({
      dialogType: 'APP_SETTING_DIALOG',
    });
  };

  const handleOpenAddCallHistory = () => {
    addDialog({
      dialogType: 'CALL_DETAIL_DIALOG',
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="h-fill-w h-flex-row h-center-between">
      <div>
        <IconButton onClick={handleOpenAppSetting}>
          <SettingsOutlined />
        </IconButton>
        <IconButton onClick={handleOpenAddCallHistory}>
          <Call />
        </IconButton>
      </div>
      <IconButton onClick={handleLogout}>
        <Logout />
      </IconButton>
    </div>
  );
};

export default HomePage;
