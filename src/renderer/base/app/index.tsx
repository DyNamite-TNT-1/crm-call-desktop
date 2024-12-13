import React from 'react'
import WindowRoot from './WindowRoot';
import { AppConfigProvider } from '../hook/common/useAppConfig';

const App = () => {
  return (
    <AppConfigProvider>
      <WindowRoot />
    </AppConfigProvider>
  );
}

export default App
