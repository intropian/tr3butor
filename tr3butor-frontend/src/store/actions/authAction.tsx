import { authStartAction, authConfirmAction, AuthActionTypes } from '../../types/auth'
import { Dispatch } from 'react'
import axios from 'axios'

export const startAuth = (public_addr: string) => {
  return async (dispatch: Dispatch<authStartAction>): Promise<void> => {
    try {
      dispatch({
        type: AuthActionTypes.START_AUTH
      })
      const response = await axios.post('/user/auth-request', {public_addr})
      dispatch({
        type: AuthActionTypes.START_AUTH_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: AuthActionTypes.START_AUTH_ERROR,
        payload: 'Error while getting data about DAO'
      })
    }
  }
}

export const confirmAuth = (public_addr: string, signed_nonce: string) => {
  return async (dispatch: Dispatch<authConfirmAction>): Promise<void> => {
    try {
      dispatch({
        type: AuthActionTypes.CONFIRM_AUTH
      })

      const response = await axios.post('/user/auth-confirm', {public_addr, signed_nonce})
      localStorage.setItem('bearer_token', response.data.accessToken)
      dispatch({
        type: AuthActionTypes.CONFIRM_AUTH_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: AuthActionTypes.CONFIRM_AUTH_ERROR,
        payload: 'Error while getting data about DAO'
      })
    }
  }
}
