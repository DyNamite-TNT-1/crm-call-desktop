import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SlideLeftMenu from '../pages/SlideLeftMenu/SlideLeftMenu';

const MainSlideLeftMenu = () => {
  return (
    <Routes>
      <Route path="/:currentTab?/*" element={<SlideLeftMenu />}></Route>
    </Routes>
  );
};

export default MainSlideLeftMenu;
