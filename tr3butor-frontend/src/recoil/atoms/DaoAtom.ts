import { atom } from 'recoil'
import { getAllDao } from '../selectors/DaoSelector'
import { Dao } from '../../types/dao'

export const DaosState = atom<Dao[]>({
  key: 'DaosState',
  default: getAllDao
})
