import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { RecoilRoot } from 'recoil'
import { Layout } from './Layout'
import { useSignUser } from './hooks/useSignUser'

function App() {
  useSignUser()
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
