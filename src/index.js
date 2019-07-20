import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from './layouts/MainLayout'
import store from './redux/store'
import { Provider } from 'react-redux'

/*store.dispatch({ type: 'COUNT_UP', number: 2 })
store.dispatch({ type: 'COUNT_UP', number: 10 })
store.dispatch({ type: 'COUNT_UP', number: 15 })

store.dispatch({ type: 'COUNT_DOWN', number: 5 })
store.dispatch({ type: 'COUNT_DOWN', number: 10 })*/

const AppWrapper = (
  <Provider store={store}>
    <MainLayout />
  </Provider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))