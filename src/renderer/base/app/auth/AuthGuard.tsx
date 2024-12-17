import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useMounted } from '@renderer/base/components/@electron/ChildWindow/effect';
import useAuth from './AuthProvider';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const { isLoggedIn, isInitialized } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && isInitialized) {
      if (!location.pathname.startsWith('/login')) {
        navigate('/login', { replace: true });
      }
    } else if (isLoggedIn && isInitialized) {
      if (location.pathname.startsWith('/login')) {
        navigate('/', { replace: true });
      }
    }
  }, [isLoggedIn, isInitialized, location.pathname]);

  return children;
};

export default AuthGuard;
