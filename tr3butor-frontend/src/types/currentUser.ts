export type CurrentUserParams = {
  id: string;
  name: string;
  public_addr: string;
};

export interface CurrentUserState {
  data: CurrentUserParams | null;
  loading: boolean;
  error: null | string;
}

export enum CurrentUserActionTypes {
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR',
}

interface GetCurrentUserAction {
  type: CurrentUserActionTypes.GET_CURRENT_USER;
}

interface GetCurrentUserSuccessAction {
  type: CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS;
  payload: CurrentUserParams;
}

interface GetCurrentUserErrorAction {
  type: CurrentUserActionTypes.GET_CURRENT_USER_ERROR;
  payload: string;
}


export type currentUserAction =
  | GetCurrentUserAction
  | GetCurrentUserSuccessAction
  | GetCurrentUserErrorAction;
