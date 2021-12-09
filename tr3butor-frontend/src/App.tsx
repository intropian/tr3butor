import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { RecoilRoot } from 'recoil'
import { Layout } from './Layout'
import { ModalContainer } from './components/Modal'

function App () {
  return (
    <Suspense fallback={<></>}>
      <RecoilRoot>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
          <ModalContainer />
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  )
}

export default App
