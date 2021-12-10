import { DAppProvider } from '@usedapp/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
// import { makeServer } from './api/mirage/Server'

// if (process.env.NODE_ENV === 'development') makeServer()
ReactDOM.render(
  <DAppProvider config={{ autoConnect: false }}>
    <Provider store={store}>
      <App />
    </Provider>
  </DAppProvider>,
  document.getElementById('root')
)
