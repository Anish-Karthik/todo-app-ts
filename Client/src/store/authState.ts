import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: { token: null, username: null },
});

// create an type for the authState
export type AuthState = {
  token: string | null;
  username: string | null;
};
