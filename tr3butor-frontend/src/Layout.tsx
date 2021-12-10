import { GlobalStyled } from 'components/GlobalStyled'
import React from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <div className="cover">
        <div className="content">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
