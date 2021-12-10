import axios from 'axios'
import { DaoApiData } from 'types/dao'

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
