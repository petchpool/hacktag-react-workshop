import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainLayout from './layouts/MainLayout'

store.dispatch({ type: 'CHANGE_MY_NAME', name: 'Hello, World.' })

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
  , document.getElementById('root'))