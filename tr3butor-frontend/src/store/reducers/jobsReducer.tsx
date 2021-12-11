import { jobAction, JobActionTypes, JobsState } from '../../types/job'

const initialState: JobsState = {
  jobsData: [],
  jobsLoading: false,
  jobsError: null
}

export const jobsReducer = (
  state: JobsState = initialState,
  action: jobAction
): JobsState => {
  switch (action.type) {
    case JobActionTypes.GET_JOBS: {
      return { ...state, jobsLoading: true }
    }
    case JobActionTypes.GET_JOBS_SUCCESS: {
      return { ...state, jobsLoading: false, jobsData: action.payload }
    }
    case JobActionTypes.GET_JOBS_ERROR: {
      return { ...state, jobsLoading: false, jobsError: action.payload }
    }
    default:
      return state
  }
}
