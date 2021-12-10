import { DAppProvider } from '@usedapp/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './api/mirage/Server'

if (process.env.NODE_ENV === 'development') makeServer()
ReactDOM.render(
  <DAppProvider config={{ autoConnect: false }}>
    <App />
  </DAppProvider>,
  document.getElementById('root')
)
