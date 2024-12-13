import { AuthProps } from '@renderer/base/types/auth';
import { atom } from 'recoil';

export function getDefaultAuth(): AuthProps {
  let defaultValues: AuthProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
    token: null,
    id: undefined,
  };
  return defaultValues;
}

export const authAtom = atom<AuthProps>({
  key: 'AuthAtom',
  default: getDefaultAuth(),
});
