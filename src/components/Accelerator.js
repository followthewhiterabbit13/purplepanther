import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'

import PageWrapper from './PageWrapper'

import Head from './Head'
import Hero from './accelerator/Hero'
import Info from './accelerator/Info'

const PageContainer = styled.div`
  background: ${props => props.theme.colors.offWhite};
`

const InfoWrapper = styled(PageWrapper)`
  padding: 40px 0;
`

const Accelerator = ({ data }) => {
  return (
    <>
      <Head title={`${data.name} Accelerator`} />
      <PageContainer>
        <Hero {...data} />
        <InfoWrapper>
          <h2>Accelerator Information</h2>
          <Info {...data} />
        </InfoWrapper>
      </PageContainer>
    </>
  )
}

export default withRouteData(Accelerator)
