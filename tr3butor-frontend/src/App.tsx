import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { RecoilRoot } from 'recoil'
import { Layout } from './Layout'

// TODO: ADD TO EVERY COMPONENT THAT HAVE ASYNC PRELOADER TAB
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<></>}>
            <Router />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
