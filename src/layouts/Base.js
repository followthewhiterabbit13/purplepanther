import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './global/Header'
import Footer from './global/Footer'

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <Page>
      <Header open={navOpen} toggleVisibility={() => setNavOpen(!navOpen)} />
      {children}
      <Footer toggleVisibility={() => setNavOpen(false)} />
    </Page>
  )
}

export default Layout
