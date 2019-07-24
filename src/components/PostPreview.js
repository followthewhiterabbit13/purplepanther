import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import _truncate from 'lodash/truncate'
import { format } from 'date-fns'

import { renderToText } from '../utils/renderToReact'

const TRUNCATE_LENGTH = 46

const PreviewContainer = styled(Link)`
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-decoration: none;
`

const Category = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 0.6rem;
`

const Title = styled.h4`
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};

  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.167;
  margin-bottom: 10px;
`

const Excerpt = styled.div`
  font-family: ${props => props.theme.fonts.secondary};

  font-size: 0.8rem;
  line-height: 1.6;
`

const BlogPostPreview = ({ slug, title, date, body, category }) => (
  <PreviewContainer to={`/blog/${slug}`}>
    <Category>{category}</Category>
    <Title title={title}>{_truncate(title, { length: TRUNCATE_LENGTH })}</Title>
    <Category>{format(date, 'MMM DD, YYYY')}</Category>

    <Excerpt>
      {_truncate(renderToText(body), { length: TRUNCATE_LENGTH * 3 })}
    </Excerpt>
  </PreviewContainer>
)

export default BlogPostPreview
