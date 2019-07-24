import React from 'react'
import renderer from 'react-test-renderer'
import renderToReact, { renderToText } from './renderToReact'
import testData from './testdata'

const RenderToReactTestComponent = () => renderToReact(testData)

const RenderToTextTestComponent = () => renderToText(testData)

describe('RenderToReactTestComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RenderToReactTestComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('RenderToTextTestComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RenderToTextTestComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
