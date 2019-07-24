import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import marked from 'marked'

import renderToReact from '../utils/renderToReact'
import Head from '../components/Head'
import PageWrapper from '../components/PageWrapper'
import ArticleHeader from '../components/ArticleHeader'

const Section = styled.section`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 300px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 280px auto;
    h1 {
      font-size: 2.5rem;
    }

    h2,
    h3 {
      font-size: 1.5em;
    }
  }
`

const PostWrapper = styled.div`
  a {
    transition: all 0.1s ease-out;
    color: ${props => props.theme.colors.primaryPink};
    &:visited {
      color: ${props => props.theme.colors.primaryPink};
    }
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colors.brand};
    }
  }
`

const AboutTheAuthor = styled.div`
  p {
    font-size: 0.8rem;
  }
`

const BlogPost = withRouteData(({ post }) => (
  <PageWrapper>
    <Head
      title={post.title}
      description={post.description}
      keywords={post.keywords}
      path={`/blog/${post.slug}`}
      image={post.heroBanner?.fields?.file?.url}
    />
    <ArticleHeader
      date={post.postedAt}
      title={post.title}
      heroImage={post.heroBanner}
    />
    <Section>
      {post.author ? (
        <AboutTheAuthor
          dangerouslySetInnerHTML={{
            __html: marked(post?.author?.fields?.about),
          }}
        />
      ) : (
        <AboutTheAuthor />
      )}
      <PostWrapper>{renderToReact(post.body)}</PostWrapper>
    </Section>
  </PageWrapper>
))

export default BlogPost
