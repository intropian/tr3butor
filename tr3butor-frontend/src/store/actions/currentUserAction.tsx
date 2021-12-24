import { currentUserAction, CurrentUserActionTypes } from '../../types/currentUser'
import { Dispatch } from 'react'
import axios from 'axios'

export const getCurrentUser = () => {
  return async (dispatch: Dispatch<currentUserAction>): Promise<void> => {
    try {
      dispatch({
        type: CurrentUserActionTypes.GET_CURRENT_USER
      })
      const bearerToken = localStorage.getItem('bearer_token')
      const response = await axios.get('/api/user/me', {
        headers: { Authorization: `Bearer ${bearerToken}` }
      })
      dispatch({
        type: CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: CurrentUserActionTypes.GET_CURRENT_USER_ERROR,
        payload: 'Error while getting data about current user'
      })
    }
  }
}
