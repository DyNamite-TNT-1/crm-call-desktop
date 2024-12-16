import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import AuthGuard from './auth/AuthGuard';
import MainLayout from './layouts/main';
import Locales from './Locales';

const WindowRoot = () => {
  return (
    <Locales>
      <HashRouter>
        <AuthProvider>
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        </AuthProvider>
      </HashRouter>
    </Locales>
  );
};

export default WindowRoot;
