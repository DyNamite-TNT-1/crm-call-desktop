import { Avatar } from '@mui/material';
import UserInfo from './UserInfo';

type Props = {
  user: {
    avatarSrc: string;
    userName: string;
    company: string;
    phone: string;
  };
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
