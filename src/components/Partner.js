import React from 'react'
import styled from 'styled-components'

import _Link from './Link'

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'img'
    'content';

  @media (min-width: 768px) {
    grid-template-columns: 2fr 5fr;
    grid-template-rows: auto;
    grid-template-areas: 'img content';
    grid-gap: 20px;
    margin-bottom: 40px;
  }
`

const ImgContainer = styled.div`
  grid-area: img;
  img {
    display: block;
    width: 100%;
  }
`

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`

const Name = styled.h6`
  margin-bottom: 5px;
`

const Title = styled.p`
  font-size: 0.6rem;
  color: ${props => props.theme.colors.brand};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: normal;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Links = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-weight: normal;
`

const Link = styled(_Link)`
  color: ${props => props.theme.colors.primaryBlue};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: normal;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.6rem;
`

const Bio = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  margin: 10px 0;

  p {
    font-size: 0.875rem;
    margin: 0;
  }
`

const Partner = ({
  name,
  image,
  reverse,
  title,
  linkedInUrl,
  twitterHandle,
  children,
  rest,
}) => (
  <Container reverse={reverse}>
    <ImgContainer>
      <img src={image.fields.file.url} alt={name} />
    </ImgContainer>
    <Content>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Bio>{children}</Bio>
      <Links>
        <Link href={linkedInUrl} noarrow>
          Linkedin
        </Link>
        {' / '}
        <Link href={`https://twitter.com/${twitterHandle}`} noarrow>
          @{twitterHandle}
        </Link>
      </Links>
    </Content>
  </Container>
)

export default Partner
