import React, { Fragment } from 'react'
import styled from 'styled-components'

import { HeroImage, PostLink } from '.'
import Accent from '../Accent'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${props => props.theme.colors.lightGrey};
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.black};
`

const FeaturedImage = styled(HeroImage)`
  height: 300px;
  object-fit: cover;
`

const PostText = styled.div`
  padding: 20px 10px;
`

const FeaturedPosts = ({ posts }) => (
  <Container>
    {posts.map(post => (
      <PostLink key={post.slug} to={`/blog/${post.slug}`}>
        {post.heroBanner && (
          <FeaturedImage
            src={post.heroBanner?.fields.file.url}
            alt={post.heroBanner?.fields.title}
          />
        )}
        <PostText>
          <Title>{post.title}</Title>
          <Accent>{post.category}</Accent>
        </PostText>
      </PostLink>
    ))}
  </Container>
)

export default FeaturedPosts
