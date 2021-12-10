import axios from 'axios'
import { DaoApiData, SelectedDaoApiData } from 'types/dao'

export async function getDaos () {
  try {
    const response = await axios.get<DaoApiData>(
      `${process.env.REACT_APP_API_PREFIX}/dao`
    )
    return response.data || []
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${process.env.REACT_APP_API_PREFIX}/dao)': ${
        (error as Error).message
      }`
    )
  }
}

export async function getDao (id: string) {
  try {
    const response = await axios.get<SelectedDaoApiData>(
      `${process.env.REACT_APP_API_PREFIX}/dao/${id}`
    )
    return response.data || []
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${
        process.env.REACT_APP_API_PREFIX
      }/dao/:id)': ${(error as Error).message}`
    )
  }
}
