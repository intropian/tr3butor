import { daoAction, DaoActionTypes, DaoState } from '../../types/dao'

const initialState: DaoState = {
  data: [],
  loading: false,
  error: null
}

export const daoReducer = (
  state: DaoState = initialState,
  action: daoAction
): DaoState => {
  switch (action.type) {
    case DaoActionTypes.GET_DAO: {
      return { ...state, loading: true }
    }
    case DaoActionTypes.GET_DAO_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case DaoActionTypes.GET_DAO_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    default:
      return state
  }
}
