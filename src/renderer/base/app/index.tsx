import WindowRoot from './WindowRoot';
import { AppConfigProvider } from '../hook/common/useAppConfig';
import AppConfigInitView from './AppConfigInitView';
import ThemeCustomization from '../config/themes';

const App = () => {
  return (
    <AppConfigProvider>
      <ThemeCustomization>
        <AppConfigInitView>
          <WindowRoot />
        </AppConfigInitView>
      </ThemeCustomization>
    </AppConfigProvider>
  );
};

export default App;
