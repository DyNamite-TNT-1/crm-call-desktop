export type User = {
  id: string;
  orgId: string;
  displayName: string;
  fullName: string;
  urlName: string;
  mention: string;
};

export type Token = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  expiresOn: number;
  tokenType?: string;
}

export type AuthProps = {
  id: any;
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: User | null;
  token?: Token | null;
}


