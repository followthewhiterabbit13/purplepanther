import React from 'react'
import styled, { css } from 'styled-components'

const baseStyle = css`
  height: 24px;
  width: 24px;
`

const Square = styled.div`
  ${baseStyle}
  background: ${props => props.theme.colors[props.color]};
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 12px 24px 12px;
  border-color: transparent transparent
    ${props => props.theme.colors[props.color]} transparent;
`
const Circle = styled.div`
  ${baseStyle}
  background: ${props => props.theme.colors[props.color]};
  border-radius: 9999px;
`

export default function Shape({ type = 'square', color = 'brand' }) {
  if (type === 'square') return <Square color={color} />
  if (type === 'triangle') return <Triangle color={color} />
  if (type === 'circle') return <Circle color={color} />
}
