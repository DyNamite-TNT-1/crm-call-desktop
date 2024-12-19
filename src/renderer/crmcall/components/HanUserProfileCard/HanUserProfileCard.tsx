import { Avatar, Typography, useTheme } from '@mui/material';
import UserInfo from './UserInfo';

type User = {
  avatarSrc: string;
  userName: string;
  company: string;
  phone: string;
};

type Props = {
  user: User;
};

const HanUserProfileCard = ({ user }: Props) => {
  return (
    <div className="h-flex-row h-cgap-16">
      <Avatar src={user.avatarSrc} />
      <UserInfo
        userName={user.userName}
        company={user.company}
        phone={user.phone}
      />
    </div>
  );
};

export default HanUserProfileCard;
