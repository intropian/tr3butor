import { authStartAction, authConfirmAction, AuthActionTypes, AuthStartState, AuthConfirmState } from '../../types/auth'

const initialStartState: AuthStartState = {
  data: null,
  loading: false,
  error: null
}
const initialConfirmState: AuthConfirmState = {
  data: null,
  loading: false,
  error: null
}
export const authStartReducer = (
  state: AuthStartState = initialStartState,
  action: authStartAction
): AuthStartState => {
  switch (action.type) {
    case AuthActionTypes.START_AUTH: {
      return { ...state, loading: true }
    }
    case AuthActionTypes.START_AUTH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    case AuthActionTypes.START_AUTH_ERROR: {
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

export const authConfirmReducer = (
  state: AuthConfirmState = initialConfirmState,
  action: authConfirmAction
): AuthConfirmState => {
  switch (action.type) {
    case AuthActionTypes.CONFIRM_AUTH: {
      return { ...state, loading: true }
    }
    case AuthActionTypes.CONFIRM_AUTH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    case AuthActionTypes.CONFIRM_AUTH_ERROR: {
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
