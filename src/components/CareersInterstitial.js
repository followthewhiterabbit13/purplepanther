import React from 'react'
import styled from 'styled-components'

import Interstitial from './Interstitial'
import Button from './Button'
import PageWrapper from './PageWrapper'

const Inner = styled.div`
  width: 760px;
`

const Title = styled.h2`
  color: white;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-weight: bold;
  padding-bottom: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
`

const CareersInterstital = () => (
  <Interstitial>
    <PageWrapper>
      <Title>Map</Title>
      <Description>
        {/* Join us in building a new, scalable model for startup <br />
        investing and corporate innovation that works. */}
      </Description>
      <ButtonWrapper>
        {/* <Button to="/careers">Careers at Highline BETA</Button> */}
      </ButtonWrapper>
    </PageWrapper>
  </Interstitial>
)

export default CareersInterstital
