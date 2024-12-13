import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';

import { useMounted } from '@renderer/base/components/@electron/ChildWindow/effect';
import { Token, User } from '@renderer/base/types/auth';
import { authAtom } from '@renderer/base/store/atoms/auth';
import Storages from '@renderer/base/utils/storages/ls';

// ==============================|| Vora Auth CONTEXT & PROVIDER ||============================== //

export type AuthContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: User | null | undefined;
  login: () => void;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [auth, setAuth] = useRecoilState(authAtom);

  const fetchAppSetting = async () => {
    const Ls = new Storages();
    const lsToken = Ls.get('token') as string;
    let token = null;
    let isLoggedIn = false;
    try {
      token = JSON.parse(lsToken) as Token;
      if (token) {
        isLoggedIn = true;
      }
    } catch (err) {}

    setAuth({
      ...auth,
      token: token,
      user: {
        id: 'mem1',
        orgId: '',
        displayName: 'Anh Duc',
        fullName: 'Anh Duc',
        urlName: '',
        mention: '@anhduc',
      },
      isLoggedIn: isLoggedIn,
      isInitialized: true,
    });
  };

  useMounted(() => {
    // fetch login data
    fetchAppSetting();
  });

  const login = () => {
    const token = {
      accessToken: 'acc',
      refreshToken: 'bb',
      expiresIn: 0,
      expiresOn: 0,
      tokenType: 'google',
    } as Token;

    const Ls = new Storages();
    Ls.set('token', JSON.stringify(token));
    setAuth({ ...auth, token: token, isLoggedIn: true });
  };

  const logout = () => {
    const Ls = new Storages();
    Ls.remove('token');
    setAuth({ ...auth, token: null, isLoggedIn: false });
  };

  const resetPassword = (email: string) =>
    new Promise<void>((resolve, reject) => {});

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        login,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
