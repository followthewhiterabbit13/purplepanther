import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  ${props => !props.center && 'align-self: flex-start;'}

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
const Img = ({ src = '//placehold.it/500x500', alt = '', center = false }) => (
  <Container center={center}>
    <img src={src} alt={alt} />
  </Container>
)

export default Img
