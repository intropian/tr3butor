import * as daoCreators from './daoAction'
import * as jobCreators from './jobAction'
import * as authActions from './authAction'

export default {
  ...daoCreators,
  ...jobCreators,
  ...authActions
}
