import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import Button from '../Button'
import renderToReact from '../../utils/renderToReact'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px;
  padding-top: 20px;
  margin: 0 80px;
`
const MetaData = styled.div``
const CTA = styled.div`
  /* padding-left: 20px; */
`

const Subtitle = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.black};
  font-size: 0.8rem;
  margin-bottom: 20px;
  text-transform: uppercase;
`

const Description = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.darkGrey};

  p {
    color: inherit;
  }
`

const LocationList = styled.ul`
  list-style: none;
`

const Info = ({
  description,
  open,
  deadline,
  locations = [],
  applicationLink,
}) => (
  <Wrapper>
    <MetaData>
      <Subtitle>Program Description</Subtitle>
      <Description>{renderToReact(description)}</Description>
    </MetaData>
    <CTA>
      <Subtitle>Location{locations.length > 1 && 's'}</Subtitle>
      <LocationList>
        {locations.map(l => (
          <Description as="li" key={l}>
            {l}
          </Description>
        ))}
      </LocationList>
      {open ? (
        <>
          <p>
            Application deadline is {format(deadline, 'MMMM D, YYYY')} by
            11:59PM EST.
          </p>
          <Button to={applicationLink}>Apply now</Button>
        </>
      ) : (
        <p>Applications are now closed.</p>
      )}
    </CTA>
  </Wrapper>
)

export default Info
