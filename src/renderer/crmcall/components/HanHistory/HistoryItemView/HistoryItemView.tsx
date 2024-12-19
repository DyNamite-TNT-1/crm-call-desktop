import { Typography, useTheme } from '@mui/material';

import { historyColSize } from '../HanHistory';
import { HistoryRow } from '@renderer/crmcall/types/history';
import HanUserProfileCard from '../../HanUserProfileCard/HanUserProfileCard';
import { ReactComponent as IcUser } from '@renderer/resources/images/ic_user.svg';

type Props = {
  history: HistoryRow;
};

const HistoryItemView = (props: Props) => {
  const { history } = props;
  const theme = useTheme();

  return (
    <div className="h-flex-row h-flex-wrap h-fill-w h-px-16 h-items-center h-py-8">
      <div
        style={{
          maxWidth: historyColSize[0],
          flexBasis: historyColSize[0],
          flexGrow: 0,
        }}
      >
        <HanUserProfileCard
          user={{
            avatarSrc: './renderer/crmcall/resources/images/icon-incoming.png',
            userName: 'Dynamite',
            company: '',
            phone: '2024/11/27 14:50',
          }}
        />
      </div>
      <div
        style={{
          maxWidth: historyColSize[1],
          flexBasis: historyColSize[1],
          flexGrow: 0,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            padding: '5px 10px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            backgroundColor: '#E7F7EF',
          }}
        >
          <Typography
            variant="h5Normal"
            sx={{
              color: theme.palette.success.main,
            }}
          >
            Phone
          </Typography>
        </div>
      </div>
      <div
        style={{
          maxWidth: historyColSize[2],
          flexBasis: historyColSize[2],
          flexGrow: 0,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: theme.palette.info.main,
        }}
      >
        <IcUser />
        <Typography
          variant={'body2'}
          sx={{
            marginLeft: '5px',
          }}
        >
          Staff
        </Typography>
      </div>
      <div
        style={{
          maxWidth: historyColSize[3],
          flexBasis: historyColSize[3],
          flexGrow: 0,
        }}
      >
        {/* FIXME - Why this typography no ellipsis when using variant */}
        <Typography
          variant="h4Normal"
          style={{
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {history.subject}
        </Typography>
      </div>
    </div>
  );
};

export default HistoryItemView;
