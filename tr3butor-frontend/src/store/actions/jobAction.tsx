import { jobAction, JobActionTypes } from '../../types/job'
import { Dispatch } from 'react'
import axios from 'axios'

export const getDaoJobs = (id: string) => {
  return async (dispatch: Dispatch<jobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionTypes.GET_DAO_JOBS
      })

      const response = await axios.get(`/api/dao/${id}/jobs`)
      dispatch({
        type: JobActionTypes.GET_DAO_JOBS_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: JobActionTypes.GET_DAO_JOBS_ERROR,
        payload: 'Error while getting data about JOB'
      })
    }
  }
}

export const getJobs = () => {
  return async (dispatch: Dispatch<jobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionTypes.GET_JOBS
      })

      const response = await axios.get('/api/dao-job')
      dispatch({
        type: JobActionTypes.GET_JOBS_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: JobActionTypes.GET_JOBS_ERROR,
        payload: 'Error while getting data about JOB'
      })
    }
  }
}

export const getJob = (id: string) => {
  return async (dispatch: Dispatch<jobAction>): Promise<void> => {
    try {
      dispatch({
        type: JobActionTypes.GET_JOB
      })

      const response = await axios.get(`/api/dao-job/${id}`)
      dispatch({
        type: JobActionTypes.GET_JOB_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: JobActionTypes.GET_JOB_ERROR,
        payload: 'Error while getting data about JOB'
      })
    }
  }
}
