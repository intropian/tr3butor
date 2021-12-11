import { jobAction, JobActionTypes, JobState } from '../../types/job'

const initialState: JobState = {
  jobData: null,
  jobLoading: false,
  jobError: null
}

export const jobReducer = (
  state: JobState = initialState,
  action: jobAction
): JobState => {
  switch (action.type) {
    case JobActionTypes.GET_JOB: {
      return { ...state, jobLoading: true }
    }
    case JobActionTypes.GET_JOB_SUCCESS: {
      return { ...state, jobLoading: false, jobData: action.payload }
    }
    case JobActionTypes.GET_JOB_ERROR: {
      return { ...state, jobLoading: false, jobError: action.payload }
    }
    default:
      return state
  }
}
