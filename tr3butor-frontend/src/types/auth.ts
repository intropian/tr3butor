export enum AuthActionTypes {
  START_AUTH = 'START_AUTH',
  START_AUTH_SUCCESS = 'START_AUTH_SUCCESS',
  START_AUTH_ERROR = 'START_AUTH_ERROR',
  CONFIRM_AUTH = 'CONFIRM_AUTH',
  CONFIRM_AUTH_SUCCESS = 'CONFIRM_AUTH_SUCCESS',
  CONFIRM_AUTH_ERROR = 'CONFIRM_AUTH_ERROR'
}


interface StartAuthAction {
  type: AuthActionTypes.START_AUTH;
}

interface StartAuthSuccessAction {
  type: AuthActionTypes.START_AUTH_SUCCESS;
  payload: AuthResponseDTO;
}

interface StartAuthErrorAction {
  type: AuthActionTypes.START_AUTH_ERROR;
  payload: string;
}


interface ConfirmAuthAction {
  type: AuthActionTypes.CONFIRM_AUTH;
}

interface ConfirmAuthSuccessAction {
  type: AuthActionTypes.CONFIRM_AUTH_SUCCESS;
  payload: AuthConfirmationDTO;
}

interface ConfirmAuthErrorAction {
  type: AuthActionTypes.CONFIRM_AUTH_ERROR;
  payload: string;
}


export type AuthResponseDTO = {
  nonce: string;
};
export type AuthConfirmationDTO = {
  accessToken: string;
  expiresIn: string;
  account: string;
};


export interface AuthStartState {
  data: AuthResponseDTO | null;
  loading: boolean;
  error: null | string;
}


export interface AuthConfirmState {
  data: AuthConfirmationDTO | null;
  loading: boolean;
  error: null | string;
}

export type authStartAction =
  | StartAuthAction
  | StartAuthSuccessAction
  | StartAuthErrorAction;

export type authConfirmAction =
  | ConfirmAuthAction
  | ConfirmAuthSuccessAction
  | ConfirmAuthErrorAction;
