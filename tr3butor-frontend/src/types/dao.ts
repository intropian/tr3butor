export type DaoParams = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tags: [];
  dateFounded: string;
  website: string;
  discord: string;
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

export enum DaoActionTypes {
  GET_DAO = 'GET_DAO',
  GET_DAO_SUCCESS = 'GET_DAO_SUCCESS',
  GET_DAO_ERROR = 'GET_GATE_COUNT_ERROR',
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

export type daoAction = GetDaoAction | GetDaoSuccessAction | GetDaoErrorAction;
