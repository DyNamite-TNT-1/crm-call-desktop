import React from 'react';
import { SettingsOutlined, Logout } from '@mui/icons-material';
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

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <IconButton onClick={handleOpenAppSetting}>
        <SettingsOutlined />
      </IconButton>
      <IconButton onClick={handleLogout} >
        <Logout />
      </IconButton>
    </div>
  );
};

export default HomePage;
