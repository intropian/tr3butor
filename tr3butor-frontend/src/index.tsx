import { DAppProvider } from '@usedapp/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <DAppProvider config={{ autoConnect: false }}>
    <App />
  </DAppProvider>,
  document.getElementById('root')
)
