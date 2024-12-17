import useAuth from '@renderer/base/app/auth/AuthProvider';
import { createContext, useContext } from 'react';

type LogoutDialogContextType = {
  onLogout: () => void;
};

const LogoutDialogContext = createContext<LogoutDialogContextType | null>(null);

export const LogoutDialogProvider = (props: {
  children: React.ReactElement;
}) => {
  const { children } = props;

  const { logout } = useAuth();

  const onLogout = () => {
    logout();
  };

  return (
    <LogoutDialogContext.Provider
      value={{
        onLogout,
      }}
    >
      {children}
    </LogoutDialogContext.Provider>
  );
};

export const useLogoutDialogProvider = () => {
  const contextLogoutDialog = useContext(LogoutDialogContext);
  if (!contextLogoutDialog)
    throw new Error('context muse be use inside provider');
  return contextLogoutDialog;
};
