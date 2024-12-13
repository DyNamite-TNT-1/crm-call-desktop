import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect } from 'react';
import useAuth from '@renderer/base/app/auth/AuthProvider';
import { DialogStackProvider } from './view_providers/dialogstack/DialogStackProvider';

export const MainCRMCallPage = () => {
  return (
    <DialogStackProvider>
      <MainCRMCallPageContent />
    </DialogStackProvider>
  );
};

const MainCRMCallPageContent = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log('[Main] location changed', location);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="*" element={isLoggedIn ? <HomePage /> : <div></div>} />
      <Route key={'login'} path={'/login'} element={<LoginPage />} />
    </Routes>
  );
};
