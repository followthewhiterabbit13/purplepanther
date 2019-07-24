import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin: 40px 0 60px;
`
const MainFeaturedImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 500px;
`

const Inner = styled.div`
  background-color: ${props => props.theme.colors.white};

  @media (min-width: 768px) {
    bottom: 0;
    position: absolute;
    max-width: 75%;
    left: 20px;
    padding: 20px;
  }
`

const Title = styled.h2`
  font-size: 2.5em;
  margin: 0;
`

const ArticleHeader = ({ title, heroImage }) => (
  <Container>
    {heroImage ? (
      <>
        <MainFeaturedImage
          src={heroImage?.fields?.file?.url}
          alt={heroImage?.fields?.title}
        />
        <Inner>
          <Title>{title}</Title>
        </Inner>
      </>
    ) : (
      <Title>{title}</Title>
    )}
  </Container>
)

export default ArticleHeader
