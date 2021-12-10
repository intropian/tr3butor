import { atom } from 'recoil'
import {
  initialModalAccountState,
  initialModalContributorsState
} from 'types/modal'

export const AccountModalState = atom({
  key: 'AccountModalState',
  default: initialModalAccountState
})

export const ContributorsModalState = atom({
  key: 'ContributorsModalState',
  default: initialModalContributorsState
})
