export type DaoParams = {
  id: string;
  name: string;
  description: string;
  avatar: string;
  color: string;
  tags: string;
  link_website: string;
  link_discord: string;
  contributors: [];
  followers: [];
  metric_mcap: string;
  metric_tvl: string;
  metric_volume: string;
  date_founded: string;
  text_blocks: TextBlock[];
};
type TextBlock = {
  title: string, content: string
}

export interface DaoState {
  data: DaoParams[];
  loading: boolean;
  error: null | string;
}

export interface DaoRelatedState {
  relatedDaoData: DaoParams[];
  relatedDaoLoading: boolean;
  relatedDaoError: null | string;
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

  GET_RELATED_DAO = 'GET_RELATED_DAO',
  GET_RELATED_DAO_SUCCESS = 'GET_RELATED_DAO_SUCCESS',
  GET_RELATED_DAO_ERROR = 'GET_RELATED_DAO_ERROR',

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

interface GetRelatedDaoAction {
  type: DaoActionTypes.GET_RELATED_DAO;
}

interface GetRelatedDaoSuccessAction {
  type: DaoActionTypes.GET_RELATED_DAO_SUCCESS;
  payload: DaoParams[];
}

interface GetRelatedDaoErrorAction {
  type: DaoActionTypes.GET_RELATED_DAO_ERROR;
  payload: string;
}

export type daoAction =
  | GetDaoAction
  | GetDaoSuccessAction
  | GetDaoErrorAction
  | GetCertainDaoAction
  | GetCertainDaoSuccessAction
  | GetCertainDaoErrorAction
  | GetRelatedDaoAction
  | GetRelatedDaoSuccessAction
  | GetRelatedDaoErrorAction;
