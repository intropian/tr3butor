import { selector } from 'recoil'
import { getDaos } from '../../api/actions/getDaos'

export const getAllDao = selector({
  key: 'getAllDao',
  get: async () => {
    try {
      return await getDaos()
    } catch (error) {
      console.error(`allDaosState -> getDao() ERROR: \n${error}`)
      return []
    }
  }
})
