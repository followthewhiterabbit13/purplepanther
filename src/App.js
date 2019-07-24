import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { ThemeProvider } from 'styled-components'
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import GlobalStyle, { theme } from './GlobalStyle'
import Layout from './layouts/Base'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <Root>
      <Layout>
         <GlobalStyle />
         {/* <Routes /> */}
{/*          
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/training">About</Link>
        <Link to="/blog">Blog</Link>

      </nav> */}
      <React.Suspense fallback={<em>Loading...</em>}>
      <Router>
          <Routes path="*" />
          </Router>
      
       </React.Suspense>
        </Layout>
      {/* <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
          
          </Router>
        </React.Suspense>
      </div> */}
      {/* </ThemeProvider> */}
    </Root>
    </ThemeProvider>
  )
}

export default App

// import React, { useEffect } from 'react'
// import { Root, Routes } from 'react-static'

// // import segment from './utils/segment'

// import Layout from './layouts/Base'
// import GlobalStyle, { theme } from './GlobalStyle'

// const App = () => 
// // {
// //   useEffect(() => {
// //     segment()
// //   })

//   // return 
//   (
//     <ThemeProvider theme={theme}>
//       <Root>
//         <Layout>
//           <GlobalStyle />
//           <Routes />
//         </Layout>
//       </Root>
//     </ThemeProvider>
//   )
// // }
// export default App




// function App() {
//   return (
//     <Root>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/blog">Blog</Link>
//         <Link to="/dynamic">Dynamic</Link>
//       </nav>
//       <div className="content">
//         <React.Suspense fallback={<em>Loading...</em>}>
//           <Router>
//             <Dynamic path="dynamic" />
//             <Routes path="*" />
//           </Router>
//         </React.Suspense>
//       </div>
//     </Root>
//   )
// }

// export default App