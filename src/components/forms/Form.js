import styled from 'styled-components'

const Form = styled.form.attrs(props => ({
  method: 'POST',
  name: props.name,
  'data-netlify': props.netlifyForm && 'true',
}))`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`

export default Form
