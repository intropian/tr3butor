import * as daoCreators from './daoAction'
import * as jobCreators from './jobAction'
import * as authCreators from './authAction'
import * as favoriteCreators from './favoriteAction'

export default {
  ...daoCreators,
  ...jobCreators,
  ...authCreators,
  ...favoriteCreators
}
