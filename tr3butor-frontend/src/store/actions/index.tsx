import * as daoCreators from './daoAction'
import * as jobCreators from './jobAction'
import * as authActions from './authAction'
import * as currentUserActions from './currentUserAction'

export default {
  ...daoCreators,
  ...jobCreators,
  ...authActions,
  ...currentUserActions
}
