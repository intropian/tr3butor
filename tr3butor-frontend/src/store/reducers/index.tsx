import { combineReducers } from 'redux'
import { daoReducer } from './authReducer'

export const rootReducer = combineReducers({
  dao: daoReducer
})

export type RootState = ReturnType<typeof rootReducer>;
