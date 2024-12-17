import React from 'react';
import MainSlideLeftMenu from './MainSlideLeftMenu';
import MainRightMenu from './MainRightMenu';
import { SLIDE_LEFT_MENU_WIDTH } from './config';

const MainLayoutType = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <MainSlideLeftMenu />
      <div
        style={{
          width: `calc(100% - ${SLIDE_LEFT_MENU_WIDTH}px)`,
          height: '100%',
        }}
      >
        <MainRightMenu />
      </div>
    </div>
  );
};

export default MainLayoutType;
