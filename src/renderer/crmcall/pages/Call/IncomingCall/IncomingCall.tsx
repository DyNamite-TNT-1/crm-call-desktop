import { Button, IconButton, Typography, useTheme } from '@mui/material';
import HanAnimationIncomingIcon from '@renderer/crmcall/components/AnimationIcon/HanAnimationIcon';
import HanUserProfileCard from '@renderer/crmcall/components/HanUserProfileCard/HanUserProfileCard';
import { Schedule } from '@mui/icons-material';
import IncomingCallHeader from './IncomingCallHeader';
import IncomingCallFooter from './IncomingCallFooter';

const IncomingCall = () => {
  const theme = useTheme();

  return (
    <div className="h-flex-col">
      <IncomingCallHeader />
      <div
        style={{
          padding: '16px',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <HanUserProfileCard
          user={{
            avatarSrc: '',
            userName: 'DyNamite',
            company: 'Hanbiro',
            phone: '09xxxxxxxx',
          }}
        />
      </div>
      <IncomingCallFooter />
    </div>
  );
};

export default IncomingCall;
