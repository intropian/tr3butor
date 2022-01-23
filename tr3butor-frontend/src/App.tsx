import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Layout } from './Layout'
import { useSignUser } from './hooks/useSignUser'
import { useActions } from './hooks/useActions'

function App() {
  useSignUser()
  const { getFavorites } = useActions()
  useEffect(() => {
    const token = localStorage.getItem('bearer_token')
    token && getFavorites(token)
  }, [localStorage.getItem('bearer_token')])
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<></>}>
          <Router />
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
