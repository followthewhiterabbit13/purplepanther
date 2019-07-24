import { createGlobalStyle } from 'styled-components'

// import LoraRegularWoff from '../public/fonts/Lora-Regular.woff'
// import LoraRegularWoff2 from '../public/fonts/Lora-Regular.woff2'

// import MarkOTBoldWoff from '../public/fonts/MarkOT-Bold.woff'
// import MarkOTBoldWoff2 from '../public/fonts/MarkOT-Bold.woff2'

// import MarkOTBookWoff from '../public/fonts/MarkOT-Book.woff'
// import MarkOTBookWoff2 from '../public/fonts/MarkOT-Book.woff2'

// import SuisseMonoWoff from '../public/fonts/SuisseIntlMono.woff'
// import SuisseMonoWoff2 from '../public/fonts/SuisseIntlMono.woff2'

const PRIMARY_FONT = 'Ariel'
const SECONDARY_FONT = 'Ariel'
const MONO_FONT = 'Ariel'

export const theme = {
  colors: {
    brand: '#FF3449',
    primaryBlue: '#357FFA',
    secondaryBlue: '#F4FEFF',
    primaryYellow: '#F3D33F',
    primaryPink: '#CC293A',
    secondaryPink: '#FADEF5',
    secondaryGreen: '#50BFA8',
    black: '#111',
    darkerGrey: '#374047',
    darkGrey: '#7F8A93',
    grey: '#ACB4B9',
    lightGrey: '#969696',
    lighterGrey: '#F8F9F9',
    offWhite: '#F9F7F6',
    white: '#FFF',
  },
  fonts: {
    primary: PRIMARY_FONT,
    secondary: SECONDARY_FONT,
    mono: MONO_FONT,
  },
  values: {
    base: '20px',
  },
}

export const inverseTheme = {
  colors: {
    brand: '#FF3449',
    primaryBlue: '#357FFA',
    secondaryBlue: '#F4FEFF',
    primaryYellow: '#F3D33F',
    secondaryPink: '#FADEF5',
    secondaryGreen: '#50BFA8',
    black: '#111',
    darkerGrey: '#374047',
    darkGrey: '#7F8A93',
    grey: '#ACB4B9',
    lightGrey: '#CFD3D6',
    lighterGrey: '#F8F9F9',
    offWhite: '#F9F7F6',
    white: '#FFF',
  },
}

const GlobalStyle = createGlobalStyle`


  html {
    overflow-y: scroll;
    overflow-x: hidden;
    line-height: 1.4;
    /* Theme colours are injected in from the object above, and not using the context theme object */
    font-size: ${theme.values.base};
    font-family:  'Helvetica Neue', Arial, sans-serif;
    color: ${theme.colors.black};
  }

  html,
  body,
  #root,
  #root > div {
    margin: 0;
    padding: 0;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 20px;
    line-height: 1.78;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 { 
    line-height: 1;
  }
 
  h1 {
    font-size: 2.5rem;
    letter-spacing: -2.5px;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
  } 

  h3 {
    line-height: 1.25;
    font-size: 1.2rem;
  }

  h6 {
    font-weight: bold;
    }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;   
      letter-spacing: -5px;
    }

    h2 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.4rem;
    }   
  }

  p {
    font-family: ${theme.fonts.secondary}, serif;
    color: ${theme.colors.darkerGrey};
  }
`
export default GlobalStyle
