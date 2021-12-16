import { daoAction, DaoActionTypes } from '../../types/dao'
import { Dispatch } from 'react'
import axios from 'axios'

export const getDao = () => {
  return async (dispatch: Dispatch<daoAction>): Promise<void> => {
    try {
      dispatch({
        type: DaoActionTypes.GET_DAO
      })

      const response = await axios.get('/api/dao')
      dispatch({
        type: DaoActionTypes.GET_DAO_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: DaoActionTypes.GET_DAO_ERROR,
        payload: 'Error while getting data about DAO'
      })
    }
  }
}

export const getCertainDao = (id: string) => {
  return async (dispatch: Dispatch<daoAction>): Promise<void> => {
    try {
      dispatch({
        type: DaoActionTypes.GET_CERTAIN_DAO
      })

      const response = await axios.get(`/api/dao/${id}`)
      dispatch({
        type: DaoActionTypes.GET_CERTAIN_DAO_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: DaoActionTypes.GET_CERTAIN_DAO_ERROR,
        payload: 'Error while getting data about DAO'
      })
    }
  }
}

export const getRelatedDao = () => {
  return async (dispatch: Dispatch<daoAction>): Promise<void> => {
    try {
      dispatch({
        type: DaoActionTypes.GET_RELATED_DAO
      })

      const response = await axios.get('/api/dao')
      dispatch({
        type: DaoActionTypes.GET_RELATED_DAO_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: DaoActionTypes.GET_RELATED_DAO_ERROR,
        payload: 'Error while getting data about DAO'
      })
    }
  }
}
