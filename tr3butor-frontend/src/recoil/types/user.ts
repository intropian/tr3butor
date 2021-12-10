export interface UserState {
  authorized: boolean;
  walletHash: string;
}

export const initialUserState: UserState = {
  authorized: false,
  walletHash: ''
}
