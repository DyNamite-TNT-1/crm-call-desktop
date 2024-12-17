import React from 'react';
import Drawer from './Drawer';

const HomePage = () => {
  return (
    <div className="h-fill-w h-fill-h h-flex-row">
      <Drawer />
      <div>Right Layout</div>
    </div>
  );
};

export default HomePage;
