import React from 'react'
import styled from 'styled-components'

const CityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: initial;
    grid-template-rows: repeat(3, 1fr);
  }
`

const Address = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }

  &:link,
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    color: ${props => props.theme.colors.primaryYellow};
  }
`

const City = styled.div``

const Title = styled.h4`
  color: ${props => props.theme.colors.lightGrey};
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  font-weight: normal;
  padding-bottom: 10px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 0.5rem;
    line-height: 1;
  }
`

const Locations = () => (
  <CityContainer>
    <City>
      <Title>Toronto</Title>
      <Address href="https://www.google.ca/maps/place/1+University+Ave,+Toronto,+ON+M5J+2P1/data=!4m2!3m1!1s0x882b34d3a0771f2f:0xcddf8f06c108653c?ved=2ahUKEwj14PPCmoTfAhVwhOAKHUUiCEIQ8gEwAHoECAMQAQ">
        1 University Ave,
        <br />
        3rd Floor
        <br />
        Toronto, ON
        <br />
        M5J 2P1
      </Address>
    </City>

    <City>
      <Title>Vancouver</Title>
      <Address href="https://www.google.ca/maps/place/555+Burrard+St,+Vancouver,+BC+V7X+1M8/@49.2863716,-123.1212611,17z/data=!3m1!4b1!4m5!3m4!1s0x548671822d969bd9:0x3899cbe47e0fa337!8m2!3d49.2863681!4d-123.1190724">
        555 Burrard St
        <br />
        2nd Floor
        <br />
        Vancouver, BC
        <br />
        V7X 1M8
      </Address>
    </City>

    <City>
      <Title>New York</Title>
      <Address href="https://www.google.com/maps/place/135+Madison+Ave,+New+York,+NY+10016,+USA/@40.7459989,-73.9861686,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a80fce5729:0x8002ce423e182591!8m2!3d40.7459949!4d-73.9839746">
        135 Madison Ave.
        <br />
        5th floor
        <br />
        New York, NY
        <br />
        10016
      </Address>
    </City>
  </CityContainer>
)

export default Locations
