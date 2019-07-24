import styled from 'styled-components'
// import logo from '../img/logos/hlb-logo.svg'
// import logoWhite from '../img/logos/hlb-logo-wh.svg'

const Logo = styled.img.attrs(props => ({
  src: props.inverse ? logoWhite : logo,
}))`
  display: block;
  width: 100%;
  height: auto;
`

export default Logo
