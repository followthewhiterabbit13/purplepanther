import React, { useState } from 'react'
import styled from 'styled-components'
import _truncate from 'lodash/truncate'

import Button from '../Button'
import PostLink from './PostLink'
import { renderToText } from '../../utils/renderToReact'
import Accent from '../Accent'

const TRUNCATE_LENGTH = 46

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin: 40px 10px;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const PostContainer = styled(PostLink)`
  color: ${props => props.theme.colors.black};
  display: flex;
  margin: 0 auto;
  max-width: 330px;
  flex-direction: column;
`

const Excerpt = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 16px;
  line-height: 1.6;
`
const ButtonContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'prev next';
  grid-gap: 40px;

  @media (min-width: 768px) {
    grid-gap: 120px;
  }
`
const NextButton = styled(Button)`
  grid-area: next;
`

const PrevButton = styled(Button)`
  grid-area: prev;
`

const PaginatedPosts = ({ posts }) => {
  const [offset, setOffset] = useState(0)
  const limit = 9

  const nextPage = increment => {
    setOffset(offset + limit * increment)
  }

  return (
    <>
      <Container>
        {posts.slice(offset, offset + limit).map(post => (
          <PostContainer key={post.slug} to={`/blog/${post.slug}`}>
            <h6>{post.title}</h6>
            <Accent>{post.category}</Accent>
            <Excerpt>
              {_truncate(renderToText(post.body), {
                length: TRUNCATE_LENGTH * 3,
              })}
            </Excerpt>
          </PostContainer>
        ))}
      </Container>

      <ButtonContainer>
        {offset > 0 && (
          <PrevButton onClick={() => nextPage(-1)}>&lt; Prev</PrevButton>
        )}
        {offset + limit <= posts.length && (
          <NextButton onClick={() => nextPage(1)}>Next &gt;</NextButton>
        )}
      </ButtonContainer>
    </>
  )
}

export default PaginatedPosts
