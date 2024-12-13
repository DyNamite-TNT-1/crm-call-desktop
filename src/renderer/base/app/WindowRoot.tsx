import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import AuthGuard from './auth/AuthGuard';
import MainLayout from './layouts/main';

const WindowRoot = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      </AuthProvider>
    </HashRouter>
  );
};

export default WindowRoot;
