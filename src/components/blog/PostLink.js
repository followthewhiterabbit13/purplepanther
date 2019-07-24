import styled from 'styled-components'
import { Link } from '@reach/router'

const PostLink = styled(Link)`
  text-decoration: none;
  padding: 10px 0;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondaryPink};
  }

  @media (hover: none) {
    a:hover {
      background-color: none;
    }
  }
`
export default PostLink
