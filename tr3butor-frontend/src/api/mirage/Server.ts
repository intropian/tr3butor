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
        return {
          data: schema.all('daos').models
        }
      })

      this.get('/pio/:id', (schema, request) => {
        return {
          data:
            schema
              .all('daos')
              .models.find(({ id }) => id === request.params.id) || null
        }
      })
    }
  })
}
