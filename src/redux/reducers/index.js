import { combineReducers } from 'redux'
import { globalReducers } from './global'
import { postReducers } from './posts'

export default combineReducers({
  global: globalReducers,
  post: postReducers
})