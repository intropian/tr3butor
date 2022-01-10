import { combineReducers } from 'redux'
import { authConfirmReducer, authStartReducer } from './authReducer'
import { daoReducer } from './daoReducer'
import { certainDaoReducer } from './certainDaoReducer'
import { relatedDaoReducer } from './relatedDaoReducer'
import { daoJobsReducer } from './daoJobsReducer'
import { jobsReducer } from './jobsReducer'
import { jobReducer } from './jobReducer'
import { favoriteReducer } from './favoriteReducer'

export const rootReducer = combineReducers({
  authStart: authStartReducer,
  authConfirm: authConfirmReducer,
  dao: daoReducer,
  relatedDao: relatedDaoReducer,
  certainDao: certainDaoReducer,
  daoJobs: daoJobsReducer,
  jobs: jobsReducer,
  job: jobReducer,
  favorite: favoriteReducer
})

export type RootState = ReturnType<typeof rootReducer>;
