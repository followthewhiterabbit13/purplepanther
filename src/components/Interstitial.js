import React from 'react'
import styled from 'styled-components'

import PageWrapper from './PageWrapper'

const Container = styled.div`
  width: 100%;
  padding: 80px 0px 80px 0px;
  background-color: ${props => props.theme.colors.grey};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Interstitial = ({ light, children }) => (
  <Container light={light}>
    <PageWrapper>
      <Content>{children}</Content>
    </PageWrapper>
  </Container>
)

export default Interstitial
