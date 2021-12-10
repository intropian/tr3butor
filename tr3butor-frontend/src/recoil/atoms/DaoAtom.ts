import { atom } from 'recoil'
import { Dao } from '../../types/dao'
import { getAllDao } from '../selectors/DaoSelector'

export const DaosState = atom<Dao[]>({
  key: 'DaosState',
  default: getAllDao
})

export const selectedDaoState = atom({
  key: 'selectedDaoState',
  default: ''
})
