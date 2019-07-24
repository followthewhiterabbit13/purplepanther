import React from 'react'
import styled from 'styled-components'
import _sortBy from 'lodash/sortBy'
import _concat from 'lodash/concat'

import PageWrapper from '../components/PageWrapper'
import PostPreview from './PostPreview'
import Button from './Button'

const Container = styled.div`
  background-color: ${props => props.theme.colors.secondaryPink};
  padding: 60px 0;
`

const Title = styled.h2``

const NewsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 40px;
  padding: 20px 0;

  @media (min-width: 768px) {
    padding: 20px 40px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const ButtonContainer = styled.div`
  margin: 20px 0;
  text-align: right;
`

const NewsSection = ({ posts }) => {
  return (
    <Container>
      <PageWrapper>
        <Title>The latest</Title>

        <NewsContainer>
          {posts.map(node => (
            <PostPreview key={node.slug} {...node} />
          ))}
        </NewsContainer>

        <ButtonContainer>
          <Button to="/blog">See more posts...</Button>
        </ButtonContainer>
      </PageWrapper>
    </Container>
  )
}

export default NewsSection
