import React from 'react';
import { Typography } from '@mui/material';
import CompanyInfo from './CompanyInfo';

type Props = {
  userName: string;
  company: string;
  phone: string;
};

const UserInfo = ({ userName, company, phone }: Props) => {
  return (
    <div className="h-flex-col">
      <div className="h-flex-row" style={{ paddingBottom: '4px' }}>
        <Typography variant="h4Medium">{userName}</Typography>
        {company && <CompanyInfo company={company} />}
      </div>
      <Typography variant="h5Normal">{phone}</Typography>
    </div>
  );
};

export default UserInfo;
