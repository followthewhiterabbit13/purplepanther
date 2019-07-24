import React from 'react'
import styled from 'styled-components'

import Interstitial from '../components/Interstitial'
import SubscribeForm from '../components/SubscribeForm'

const InterstitalForm = styled.div`
  display: inline-flex;
`

const SubscribeInterstital = ({ formName }) => (
  <Interstitial>
    <InterstitalForm>
      <p>Keep up to date with Highline Beta — sign up and stay informed.</p>
      <SubscribeForm
        formName={`${formName} - Page Form`}
        netlifyForm
        recaptcha
      />
    </InterstitalForm>
  </Interstitial>
)

export default SubscribeInterstital
