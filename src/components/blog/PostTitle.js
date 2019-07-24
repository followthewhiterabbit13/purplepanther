import styled from 'styled-components'

const PostTitle = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.black};
  margin-top: 10px;
  align-items: flex-end;
`
export default PostTitle
