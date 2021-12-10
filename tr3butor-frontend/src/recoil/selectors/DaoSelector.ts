import { selector } from 'recoil'
import { getDao, getDaos } from '../../api/actions/dao'
import { selectedDaoState } from '../atoms/DaoAtom'

export const getAllDao = selector({
  key: 'getAllDao',
  get: async () => {
    try {
      const response = await getDaos()
      return response.data
    } catch (error) {
      console.error(`allDaosState -> getDao() ERROR: \n${error}`)
      return []
    }
  }
})

export const getSelectedDao = selector({
  key: 'getSelectedDao',
  get: async ({ get }) => {
    try {
      const id = get(selectedDaoState)
      if (!id) {
        return null
      }

      const response = await getDao(id)
      return response.data || null
    } catch (error) {
      console.error(`allDaosState -> getDao() ERROR: \n${error}`)
      return []
    }
  }
})
