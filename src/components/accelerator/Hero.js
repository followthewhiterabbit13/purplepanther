import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../Button'
import Img from '../Img'
import PageWrapper from '../PageWrapper'
import { inverseTheme } from '../../GlobalStyle'
import renderToReact from '../../utils/renderToReact'

const Container = styled.div`
  background: ${props => props.theme.colors.darkerGrey};
  color: ${props => props.theme.colors.white};

  * {
    color: inherit;
  }
`

const Inner = styled(PageWrapper)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 80px 0;
`

const CopyContainer = styled.div`
  margin: 0 80px;
`
const ImageContainer = styled.div`
  display: flex;
`

const Description = styled.div`
  color: ${props => props.theme.colors.lightGrey};
  p {
    font-size: 0.875rem;
  }
`

const Tagline = styled.h4`
  margin-bottom: 40px;
`
const Title = styled.h1``

const Hero = ({ name, description, logoWhite: logo, tagline }) => (
  <ThemeProvider theme={inverseTheme}>
    <Container>
      <Inner>
        <ImageContainer>
          <Img
            src={logo?.fields?.file?.url}
            alt={logo?.fields?.file?.title}
            center
          />
        </ImageContainer>
        <CopyContainer>
          {/* <Title>{name}</Title> */}
          <Tagline>{tagline}</Tagline>
          <Description>{renderToReact(description)}</Description>
        </CopyContainer>
      </Inner>
    </Container>
  </ThemeProvider>
)

export default Hero
