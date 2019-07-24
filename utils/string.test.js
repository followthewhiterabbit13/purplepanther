import React from 'react'
import { capitalize } from './string'
import { italic } from 'ansi-colors'

const testString = 'a quick brown fox jumped over a lazy dog.'
const successString = 'A quick brown fox jumped over a lazy dog.'

describe('Capitalize', () => {
  it('capitalizes the first character of a string', () => {
    expect(capitalize(testString)).toMatch(successString)
  })
})
