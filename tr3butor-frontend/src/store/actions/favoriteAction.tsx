import { favoriteAction, FavoriteActionTypes } from '../../types/favorite'
import { Dispatch } from 'react'
import axios from 'axios'

export const getFavorites = (token: string) => {
  return async (dispatch: Dispatch<favoriteAction>): Promise<void> => {
    try {
      dispatch({
        type: FavoriteActionTypes.GET_FAVORITE
      })
      const response = await axios.get('/api/user/favourites', {
        headers: { Authorization: `Bearer ${token}` }
      })
      dispatch({
        type: FavoriteActionTypes.GET_FAVORITE_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: FavoriteActionTypes.GET_FAVORITE_ERROR,
        payload: 'Error while getting data about favorites'
      })
    }
  }
}


export const addFavorites = (token: string, favoriteId: string) => {
  return async (dispatch: Dispatch<favoriteAction>): Promise<void> => {
    try {
      dispatch({
        type: FavoriteActionTypes.GET_FAVORITE
      })
      const response = await axios.post('/api/user/add-favourites', { favourites_ids: [favoriteId] }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      dispatch({
        type: FavoriteActionTypes.GET_FAVORITE_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: FavoriteActionTypes.GET_FAVORITE_ERROR,
        payload: 'Error while posting data about favorites'
      })
    }
  }
}
