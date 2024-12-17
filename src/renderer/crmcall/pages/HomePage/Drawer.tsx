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

const Drawer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const { addDialog } = useDialogStack();

  // Configuration Array
  const topItems = useMemo(() => {
    return [
      { type: 'avatar', key: 'avatar', src: '' },
      {
        key: 'missed_call',
        icon: <IcMissedCall style={{ color: 'white' }} />,
        title: 'tooltip_missed_call_tab',
      },
      {
        key: 'search',
        icon: <IcSearch style={{ color: 'white' }} />,
        title: 'tooltip_search_tab',
      },
      {
        key: 'contacts',
        icon: <IcContact style={{ color: 'white' }} />,
        title: 'tooltip_contacts_tab',
      },
    ];
  }, [t]);

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
        width: '60px',
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
            return <AvatarDrawer key={key} src={item.src} />;
          }

          return (
            <ButtonDrawer
              key={key}
              title={t(item.title!)}
              onClick={() => {
                handleClickDrawerItem(key);
              }}
            >
              {item.icon!}
            </ButtonDrawer>
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
            <ButtonDrawer
              key={key}
              title={t(item.title)}
              onClick={() => {
                handleClickDrawerItem(key);
              }}
            >
              {item.icon}
            </ButtonDrawer>
          );
        })}
        {/* <ButtonDrawer
          onClick={handleOpenAddCallHistory}
          title={t('tooltip_add_history_tab')}
        >
          <IcAddHistory style={{ color: 'white' }} />
        </ButtonDrawer>
        <ButtonDrawer
          onClick={handleOpenAppSetting}
          title={t('tooltip_setting_tab')}
        >
          <IcSetting style={{ color: 'white' }} />
        </ButtonDrawer>
        <ButtonDrawer onClick={handleLogout} title={t('tooltip_logout_tab')}>
          <IcLogout style={{ color: 'white' }} />
        </ButtonDrawer> */}
      </List>
    </div>
  );
};

export default Drawer;

const AvatarDrawer = (props: { src: string }) => {
  const { src } = props;
  return (
    <ListItem key={'avatar'} disablePadding>
      <ListItemAvatar
        className="h-flex-center"
        sx={{
          height: '60px',
          width: '60px',
          display: 'flex',
        }}
      >
        <Avatar src={src} />
      </ListItemAvatar>
    </ListItem>
  );
};

const ButtonDrawer = (props: {
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
          sx={{ height: '60px', width: '60px' }}
        >
          {children}
        </ListItemButton>
      </ListItem>
    </CRMToolTip>
  );
};
