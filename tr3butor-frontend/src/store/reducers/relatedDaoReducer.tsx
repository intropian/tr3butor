import { daoAction, DaoActionTypes, DaoRelatedState } from '../../types/dao'

const initialState: DaoRelatedState = {
  relatedDaoData: [],
  relatedDaoLoading: false,
  relatedDaoError: null
}

export const relatedDaoReducer = (
  state: DaoRelatedState = initialState,
  action: daoAction
): DaoRelatedState => {
  switch (action.type) {
    case DaoActionTypes.GET_RELATED_DAO: {
      return { ...state, relatedDaoLoading: true }
    }
    case DaoActionTypes.GET_RELATED_DAO_SUCCESS: {
      return {
        ...state,
        relatedDaoLoading: false,
        relatedDaoData: action.payload
      }
    }
    case DaoActionTypes.GET_RELATED_DAO_ERROR: {
      return {
        ...state,
        relatedDaoLoading: false,
        relatedDaoError: action.payload
      }
    }
    default:
      return state
  }
}
