import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { useMemo } from 'react';

import CRMToolTip from '@renderer/crmcall/components/CRMTooltip';
import useDialogStack from '@renderer/crmcall/view_providers/dialogstack/DialogStackProvider';
import { ReactComponent as IcMissedCall } from '@renderer/resources/images/ic_missed_call.svg';
import { ReactComponent as IcSearch } from '@renderer/resources/images/ic_search.svg';
import { ReactComponent as IcContact } from '@renderer/resources/images/ic_contact.svg';

import { ReactComponent as IcAddHistory } from '@renderer/resources/images/ic_add_history.svg';
import { ReactComponent as IcSetting } from '@renderer/resources/images/ic_setting.svg';
import { ReactComponent as IcLogout } from '@renderer/resources/images/ic_logout.svg';
import {
  kRouteCustomerList,
  kRouteMissedCallList,
  kRouteSearch,
  SLIDE_LEFT_MENU_WIDTH,
} from '@renderer/crmcall/layouts/config';
import { useNavigate } from 'react-router-dom';

const SlideLeftMenu = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { addDialog } = useDialogStack();

  // Configuration Array
  const topItems = useMemo(() => {
    return [
      { type: 'avatar', key: 'avatar', src: '' },
      {
        key: kRouteMissedCallList,
        icon: <IcMissedCall style={{ color: 'white' }} />,
        title: 'tooltip_missed_call_tab',
      },
      {
        key: kRouteSearch,
        icon: <IcSearch style={{ color: 'white' }} />,
        title: 'tooltip_search_tab',
      },
      {
        key: kRouteCustomerList,
        icon: <IcContact style={{ color: 'white' }} />,
        title: 'tooltip_contacts_tab',
      },
    ];
  }, []);

  const bottomItems = useMemo(() => {
    return [
      {
        key: 'add_history',
        icon: <IcAddHistory style={{ color: 'white' }} />,
        title: 'tooltip_add_history_tab',
      },
      {
        key: 'setting',
        icon: <IcSetting style={{ color: 'white' }} />,
        title: 'tooltip_setting_tab',
      },
      {
        key: 'logout',
        icon: <IcLogout style={{ color: 'white' }} />,
        title: 'tooltip_logout_tab',
      },
    ];
  }, []);

  const handleClickDrawerItem = (key: string) => {
    if (key == 'add_history') {
      handleOpenAddCallHistory();
    } else if (key == 'setting') {
      handleOpenAppSetting();
    } else if (key == 'logout') {
      handleLogout();
    } else {
      navigate({
        pathname: '/main/' + key,
      });
    }
  };

  const handleOpenAddCallHistory = () => {
    addDialog({
      dialogType: 'CALL_DETAIL_DIALOG',
    });
  };

  const handleOpenAppSetting = () => {
    addDialog({
      dialogType: 'APP_SETTING_DIALOG',
    });
  };

  const handleLogout = () => {
    addDialog({
      dialogType: 'LOGOUT_DIALOG',
    });
  };

  return (
    <div
      className="h-flex-col h-fill-h h-center-between"
      style={{
        backgroundColor:
          theme.palette.mode == 'light'
            ? theme.palette.primary.main
            : theme.palette.background.paper,
        width: SLIDE_LEFT_MENU_WIDTH,
      }}
    >
      {/* Top Section */}
      <List
        sx={{
          p: 0,
        }}
      >
        {topItems.map((item, index) => {
          const key = item.key;
          if (item.type === 'avatar') {
            return <SLAvatar key={key} src={item.src} />;
          }

          return (
            <SLButton
              key={key}
              title={t(item.title!)}
              onClick={() => {
                handleClickDrawerItem(key);
              }}
            >
              {item.icon!}
            </SLButton>
          );
        })}
      </List>
      {/* Bottom Section */}
      <List
        sx={{
          p: 0,
        }}
      >
        {bottomItems.map((item, index) => {
          const key = item.key;
          return (
            <SLButton
              key={key}
              title={t(item.title)}
              onClick={() => {
                handleClickDrawerItem(key);
              }}
            >
              {item.icon}
            </SLButton>
          );
        })}
      </List>
    </div>
  );
};

export default SlideLeftMenu;

const SLAvatar = (props: { src: string }) => {
  const { src } = props;
  return (
    <ListItem key={'avatar'} disablePadding>
      <ListItemAvatar
        className="h-flex-center"
        sx={{
          height: '60px',
          width: SLIDE_LEFT_MENU_WIDTH,
          display: 'flex',
        }}
      >
        <Avatar src={src} />
      </ListItemAvatar>
    </ListItem>
  );
};

const SLButton = (props: {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactElement;
}) => {
  const { onClick, title, children } = props;

  return (
    <CRMToolTip title={title} aria-label={title}>
      <ListItem key={title} disablePadding>
        <ListItemButton
          className="h-just-center"
          onClick={onClick}
          sx={{ height: '60px', width: SLIDE_LEFT_MENU_WIDTH }}
        >
          {children}
        </ListItemButton>
      </ListItem>
    </CRMToolTip>
  );
};
