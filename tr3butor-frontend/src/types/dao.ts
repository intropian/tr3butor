export type DaoParams = {
  id: string;
  name: string;
  description: string;
  avatar: string;
  color: string;
  tags: string;
  dateFounded: string;
  link_website: string;
  link_discord: string;
  mcap: string;
  volume: string;
  tvl: string;
  contributors: [];
  followers: [];
};

export interface DaoState {
  data: DaoParams[];
  loading: boolean;
  error: null | string;
}

export interface DaoCertainState {
  certainDaoData: DaoParams | null;
  certainDaoLoading: boolean;
  certainDaoError: null | string;
}

export enum DaoActionTypes {
  GET_DAO = 'GET_DAO',
  GET_DAO_SUCCESS = 'GET_DAO_SUCCESS',
  GET_DAO_ERROR = 'GET_GATE_COUNT_ERROR',

  GET_CERTAIN_DAO = 'GET_CERTAIN_DAO',
  GET_CERTAIN_DAO_SUCCESS = 'GET_CERTAIN_DAO_SUCCESS',
  GET_CERTAIN_DAO_ERROR = 'GET_CERTAIN_DAO_ERROR',
}

interface GetDaoAction {
  type: DaoActionTypes.GET_DAO;
}

interface GetDaoSuccessAction {
  type: DaoActionTypes.GET_DAO_SUCCESS;
  payload: DaoParams[];
}

interface GetDaoErrorAction {
  type: DaoActionTypes.GET_DAO_ERROR;
  payload: string;
}

interface GetCertainDaoAction {
  type: DaoActionTypes.GET_CERTAIN_DAO;
}

interface GetCertainDaoSuccessAction {
  type: DaoActionTypes.GET_CERTAIN_DAO_SUCCESS;
  payload: DaoParams;
}

interface GetCertainDaoErrorAction {
  type: DaoActionTypes.GET_CERTAIN_DAO_ERROR;
  payload: string;
}

export type daoAction =
  | GetDaoAction
  | GetDaoSuccessAction
  | GetDaoErrorAction
  | GetCertainDaoAction
  | GetCertainDaoSuccessAction
  | GetCertainDaoErrorAction;
