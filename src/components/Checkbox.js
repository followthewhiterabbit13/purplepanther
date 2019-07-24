import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CheckboxLabel = styled.label``

const CheckboxInput = styled.input`
  margin-right: 10px;
`

const Checkbox = ({ label, value, name, ...props }) => (
  <CheckboxContainer>
    <CheckboxInput type="checkbox" name={name} value={value} />
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxContainer>
)

export default Checkbox
