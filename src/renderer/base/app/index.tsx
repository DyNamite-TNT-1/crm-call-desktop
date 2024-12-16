import React from 'react'
import WindowRoot from './WindowRoot';
import { AppConfigProvider } from '../hook/common/useAppConfig';
import AppConfigInitView from './AppConfigInitView';

const App = () => {
  return (
    <AppConfigProvider>
      <AppConfigInitView>
        <WindowRoot />
      </AppConfigInitView>
    </AppConfigProvider>
  );
}

export default App
