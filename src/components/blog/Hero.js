import React from 'react'
import styled from 'styled-components'

import HeroImage from './HeroImage'
import PostLink from './PostLink'
import Accent from '../Accent'

const IMAGE_HEIGHT = '500px'

const Container = styled(PostLink)`
  display: grid;
  grid-template-rows: 60% 40%;

  margin: 40px 0 0;
  padding: 0px;

  @media (min-width: 768px) {
    height: ${IMAGE_HEIGHT};
    margin: 40px 0;
  }
`

const Inner = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 30px 20px;

  @media (min-width: 768px) {
    width: 80%;
    margin-left: 10px;
  }

  h2 {
    margin: 0 0 10px;
    color: ${props => props.theme.colors.black};

    @media (min-width: 768px) {
      font-size: 2.25em;
    }
  }
`

const MainFeaturedImage = styled(HeroImage)`
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`

const Hero = ({
  to,
  background = 'transparent',
  post: { title, slug, heroBanner, category },
}) => (
  <Container to={`/blog/${slug}`}>
    {heroBanner && (
      <MainFeaturedImage
        src={heroBanner.fields.file.url}
        alt={heroBanner.fields.title}
      />
    )}
    <Inner background={background}>
      <h2>{title}</h2>
      <Accent>{category}</Accent>
    </Inner>
  </Container>
)

export default Hero
