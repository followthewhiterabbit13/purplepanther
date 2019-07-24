import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../components/PageWrapper'
import { Link as _Link } from '@reach/router'

// import rbcLogo from '../img/logos/rbc-logo.png'
// import morneauLogo from '../img/logos/morneau-logo.png'
// import inbevLogo from '../img/logos/inbev-logo.png'

const Container = styled.div`
  background-color: ${props => props.theme.colors.offWhite};
  padding: 60px 0;
`

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: initial;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: initial;
    padding: 40px 80px;
    flex-flow: row wrap;
  }
`

const Link = styled(_Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Title = styled.h6`
  max-width: 480px;
  text-align: left;
  line-height: 1.2;

  &:after {
    content: ' ';
    display: block;
    width: 100px;
    margin-top: 20px;
    border-top: 1px solid ${props => props.theme.colors.black};
  }
`

const Clients = () => (
  <Container>
    <PageWrapper>
      <Title>
        Map{/* We&#8217;re investing, and co-creating ventures with the world&#8217;s
        leading enterprises */}
      </Title>
      <LogoContainer>
        <Link to="/accelerators">
          {/* <img src={rbcLogo} alt="RBC Royal Bank" /> */}
        </Link>
        <Link to="/case-study/abinbev-launches-internal-accelerator-program-to-create-new-ventures">
          {/* <img src={inbevLogo} alt="AB InBev" /> */}
        </Link>
        <Link to="/case-study/with-highline-beta-morneau-shepell-developed-a-new-product">
          {/* <img src={morneauLogo} alt="Morneau Shepell" /> */}
        </Link>
      </LogoContainer>
    </PageWrapper>
  </Container>
)

export default Clients
