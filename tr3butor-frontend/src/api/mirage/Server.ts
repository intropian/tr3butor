import { createServer, Model } from 'miragejs'
import daos from './Fixtures/getDao'
import { Dao } from '../../types/dao'

export function makeServer () {
  return createServer({
    models: {
      daos: Model.extend<Partial<Dao[]>>([])
    },
    fixtures: {
      daos
    },
    environment: 'development',
    routes () {
      this.urlPrefix = process.env.REACT_APP_API_PREFIX || ''
      this.get('/dao', (schema) => {
        return schema.all('daos').models
      })
    }
  })
}
