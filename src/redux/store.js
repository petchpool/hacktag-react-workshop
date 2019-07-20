import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../saga'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagas)