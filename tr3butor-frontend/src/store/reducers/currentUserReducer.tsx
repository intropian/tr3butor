import { currentUserAction, CurrentUserActionTypes, CurrentUserState  } from '../../types/currentUser'

const initialState: CurrentUserState = {
  data: null,
  loading: false,
  error: null
}

export const currentUserReducer = (
  state: CurrentUserState = initialState,
  action: currentUserAction
): CurrentUserState => {
  switch (action.type) {
    case CurrentUserActionTypes.GET_CURRENT_USER: {
      return { ...state, loading: true }
    }
    case CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    case CurrentUserActionTypes.GET_CURRENT_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}
