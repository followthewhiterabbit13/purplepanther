import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled, { css } from 'styled-components'

const style = css`
  margin: 0 0 0 20px;
`

const Ol = styled.ol`
  ${style}
`

const Ul = styled.ul`
  ${style}
`

const renderToReact = content => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <img
          src={node?.data?.target?.fields?.file?.url}
          alt={node?.data?.target?.fields?.title}
        />
      ),
      [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,

      [BLOCKS.OL_LIST]: (node, children) => <Ol>{children}</Ol>,
    },
  }
  return documentToReactComponents(content, options)
}

export default renderToReact

export const renderToText = documentToPlainTextString
