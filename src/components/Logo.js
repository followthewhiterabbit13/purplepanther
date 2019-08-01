import styled from 'styled-components'
// import logo from '../img/SmallLogo copywhite copy.png'
// import logoWhite from '../img/logos/hlb-logo-wh.svg'

const Logo = styled.img.attrs(props => ({
  src: props.inverse ? logoWhite : logo,
}))`
  display: block;
  width: 100%;
  height: auto;
`

export default Logo
