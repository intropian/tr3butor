export type FavoriteParams = {
  name: string;
  eth_address: string;
  avatar: string;
};

export interface FavoriteState {
  data: FavoriteParams[];
  loading: boolean;
  error: null | string;
}

export interface AddFavoriteState {
  loading: boolean;
  error: null | string;
}

export enum FavoriteActionTypes {
  GET_FAVORITE = 'GET_FAVORITE',
  GET_FAVORITE_SUCCESS = 'GET_FAVORITE_SUCCESS',
  GET_FAVORITE_ERROR = 'GET_FAVORITE_ERROR',

  ADD_FAVORITE = 'ADD_FAVORITE',
  ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS',
  ADD_FAVORITE_ERROR = 'ADD_FAVORITE_ERROR',
}

interface GetFavoriteAction {
  type: FavoriteActionTypes.GET_FAVORITE;
}

interface GetFavoriteSuccessAction {
  type: FavoriteActionTypes.GET_FAVORITE_SUCCESS;
  payload: FavoriteParams[];
}

interface GetFavoriteErrorAction {
  type: FavoriteActionTypes.GET_FAVORITE_ERROR;
  payload: string;
}


interface AddFavoriteAction {
  type: FavoriteActionTypes.ADD_FAVORITE;
}

interface AddFavoriteSuccessAction {
  type: FavoriteActionTypes.ADD_FAVORITE_SUCCESS;
}

interface AddFavoriteErrorAction {
  type: FavoriteActionTypes.ADD_FAVORITE_ERROR;
  payload: string;
}


export type favoriteAction =
  | GetFavoriteAction
  | GetFavoriteSuccessAction
  | GetFavoriteErrorAction
  | AddFavoriteAction
  | AddFavoriteSuccessAction
  | AddFavoriteErrorAction;
