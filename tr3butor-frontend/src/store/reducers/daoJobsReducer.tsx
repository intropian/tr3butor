import { DaoJobsState, jobAction, JobActionTypes } from '../../types/job'

const initialState: DaoJobsState = {
  daoJobsData: [],
  daoJobsLoading: false,
  daoJobsError: null
}

export const daoJobsReducer = (
  state: DaoJobsState = initialState,
  action: jobAction
): DaoJobsState => {
  switch (action.type) {
    case JobActionTypes.GET_DAO_JOBS: {
      return { ...state, daoJobsLoading: true }
    }
    case JobActionTypes.GET_DAO_JOBS_SUCCESS: {
      return { ...state, daoJobsLoading: false, daoJobsData: action.payload }
    }
    case JobActionTypes.GET_DAO_JOBS_ERROR: {
      return { ...state, daoJobsLoading: false, daoJobsError: action.payload }
    }
    default:
      return state
  }
}
