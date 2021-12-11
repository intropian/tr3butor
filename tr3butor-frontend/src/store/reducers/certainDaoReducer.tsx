import { daoAction, DaoActionTypes, DaoCertainState } from '../../types/dao'

const initialState: DaoCertainState = {
  certainDaoData: null,
  certainDaoLoading: false,
  certainDaoError: null
}

export const certainDaoReducer = (
  state: DaoCertainState = initialState,
  action: daoAction
): DaoCertainState => {
  switch (action.type) {
    case DaoActionTypes.GET_CERTAIN_DAO: {
      return { ...state, certainDaoLoading: true }
    }
    case DaoActionTypes.GET_CERTAIN_DAO_SUCCESS: {
      return {
        ...state,
        certainDaoLoading: false,
        certainDaoData: action.payload
      }
    }
    case DaoActionTypes.GET_CERTAIN_DAO_ERROR: {
      return {
        ...state,
        certainDaoLoading: false,
        certainDaoError: action.payload
      }
    }
    default:
      return state
  }
}
