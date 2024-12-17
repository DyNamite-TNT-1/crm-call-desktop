import WindowRoot from './WindowRoot';
import { AppConfigProvider } from '../hook/common/useAppConfig';
import AppConfigInitView from './AppConfigInitView';
import ThemeCustomization from '../config/themes';
import { Suspense } from 'react';

const App = () => {
  return (
    <AppConfigProvider>
      <ThemeCustomization>
        <Suspense fallback={<></>}>
          <AppConfigInitView>
            <WindowRoot />
          </AppConfigInitView>
        </Suspense>
      </ThemeCustomization>
    </AppConfigProvider>
  );
};

export default App;
