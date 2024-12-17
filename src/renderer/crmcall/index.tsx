import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect } from 'react';
import useAuth from '@renderer/base/app/auth/AuthProvider';
import { DialogStackProvider } from './view_providers/dialogstack/DialogStackProvider';
import MainLayoutType from './layouts';

export const MainCRMCallPage = () => {
  const { isLoggedIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('[Main] location changed', location);
    if (isLoggedIn) {
      if (location.pathname == '/') {
        navigate({ pathname: `/main/` }, { replace: true });
      }
    }
  }, [location.pathname, isLoggedIn]);

  return (
    <Routes>
      {isLoggedIn && (
        <Route key={'main'} path={'/main/*'} element={<MainPage />} />
      )}
      <Route key={'login'} path={'/login'} element={<LoginPage />} />
      <Route path={`*`} element={<LoginPage />} />
    </Routes>
  );
};

const MainPage = () => {
  return (
    <DialogStackProvider>
      <MainLayoutType />
    </DialogStackProvider>
  );
};
