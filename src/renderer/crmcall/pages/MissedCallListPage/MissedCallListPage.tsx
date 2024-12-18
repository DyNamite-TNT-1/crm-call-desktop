import { Typography } from '@mui/material';
import HanSearchField from '@renderer/crmcall/components/TextField/HanSearchField';
import React from 'react';

const MissedCallListPage = () => {
  return (
    <div>
      <Typography variant="h2SemiBold">
        Follow-Up Required - CRM Support Assistance
      </Typography>

      <div
        style={{
          width: '315px',
        }}
      >
        <HanSearchField />
      </div>
    </div>
  );
};

export default MissedCallListPage;
