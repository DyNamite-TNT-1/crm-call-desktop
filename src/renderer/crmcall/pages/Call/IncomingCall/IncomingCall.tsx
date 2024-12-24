import { useTheme } from '@mui/material';
import { useState } from 'react';

import HanUserProfileCard from '@renderer/crmcall/components/HanUserProfileCard/HanUserProfileCard';
import IncomingCallHeader from './IncomingCallHeader';
import IncomingCallFooter from './IncomingCallFooter';
import HanHistory from '@renderer/crmcall/components/HanHistory/HanHistory';

const incomingCallWidth = 300;

const IncomingCall = () => {
  const theme = useTheme();

  const [isShowedHistory, setIsShowedHistory] = useState<boolean>(false);

  const handleToggleShowedHistory = () => {
    setIsShowedHistory(!isShowedHistory);
  };

  return (
    <div className="h-flex-row h-fill-h">
      <div
        className="h-flex-col"
        style={{
          minWidth: incomingCallWidth,
          height: 'fit-content',
          border: '1px solid',
          borderColor: theme.palette.divider,
        }}
      >
        <IncomingCallHeader />
        <div
          style={{
            padding: '16px',
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <HanUserProfileCard
            key={'user-row'}
            user={{
              avatarSrc: '',
              userName: 'DyNamite',
              company: 'Hanbiro',
              phone: '09xxxxxxxx',
            }}
          />
        </div>
        <IncomingCallFooter onClickHistory={handleToggleShowedHistory} />
      </div>
      {isShowedHistory && (
        <div
          style={{
            width: `calc(100% - ${incomingCallWidth}px)`,
          }}
        >
          <HanHistory key={'history_in_call'} />
        </div>
      )}
    </div>
  );
};

export default IncomingCall;
