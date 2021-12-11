import { combineReducers } from 'redux'
import { daoReducer } from './daoReducer'
import { certainDaoReducer } from './certainDaoReducer'
import { daoJobsReducer } from './daoJobsReducer'
import { jobsReducer } from './jobsReducer'
import { jobReducer } from './jobReducer'

export const rootReducer = combineReducers({
  dao: daoReducer,
  certainDao: certainDaoReducer,
  daoJobs: daoJobsReducer,
  jobs: jobsReducer,
  job: jobReducer
})

export type RootState = ReturnType<typeof rootReducer>;
