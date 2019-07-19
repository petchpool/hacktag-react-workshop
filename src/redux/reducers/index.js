import { combineReducers } from 'redux'
import { globalReducers } from './global'

export default combineReducers({
  global: globalReducers,
})