import { favoriteAction, FavoriteActionTypes, FavoriteState } from '../../types/favorite'

const initialState: FavoriteState = {
  data: [],
  loading: false,
  error: null
}

export const favoriteReducer = (
  state: FavoriteState = initialState,
  action: favoriteAction
): FavoriteState => {
  switch (action.type) {
    case FavoriteActionTypes.GET_FAVORITE: {
      return { ...state, loading: true }
    }
    case FavoriteActionTypes.GET_FAVORITE_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case FavoriteActionTypes.GET_FAVORITE_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }


    case FavoriteActionTypes.ADD_FAVORITE: {
      return { ...state, loading: true }
    }
    case FavoriteActionTypes.ADD_FAVORITE_SUCCESS: {
      return { ...state, loading: false }
    }
    case FavoriteActionTypes.ADD_FAVORITE_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    default:
      return state
  }
}
