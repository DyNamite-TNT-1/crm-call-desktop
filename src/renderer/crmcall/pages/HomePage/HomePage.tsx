import React from 'react';
import { SettingsOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useDialogStack from '@renderer/crmcall/view_providers/dialogstack/DialogStackProvider';

const HomePage = () => {
  const { addDialog } = useDialogStack();

  const handleOpenAppSetting = () => {
    addDialog({
      dialogType: 'APP_SETTING_DIALOG',
    });
  };

  return (
    <div>
      <IconButton onClick={handleOpenAppSetting}>
        <SettingsOutlined />
      </IconButton>
      {/* TODO - Implement logout item here */}
    </div>
  );
};

export default HomePage;
