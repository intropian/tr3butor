import { atom } from 'recoil'
import { initialUserState } from '../types/user'

export const userState = atom({
  key: 'userState',
  default: initialUserState
})
