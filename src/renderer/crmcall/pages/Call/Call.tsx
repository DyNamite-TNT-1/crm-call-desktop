import React from 'react';
import IncomingCall from './IncomingCall/IncomingCall';
import { useTheme } from '@mui/material';

const Call = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        width: '400px',
        border: '1px solid',
        borderColor: theme.palette.divider,
      }}
    >
      <IncomingCall />
    </div>
  );
};

export default Call;
