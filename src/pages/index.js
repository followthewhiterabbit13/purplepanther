import React from 'react'

import styled from 'styled-components'
import { withRouteData } from 'react-static'

import Head from '../components/Head'
import Clients from '../components/Clients'
// import NewsSection from '../components/NewsSection'
import Button from '../components/Button'
import PageWrapper from '../components/PageWrapper'
import ContactForm from '../components/ContactForm'
import Portfolio from '../components/Portfolio'
import CareersInterstitial from '../components/CareersInterstitial'


const Hero = styled.div`
  display: grid;

  @media (min-width: 768px) {
    padding: 40px 0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      'title img'
      'desc img'
      'cocreation img'
      'corporate fund';

    h1 {
      grid-area: title;
    }

    h3.description {
      line-height: 1.25;
      grid-area: desc;
    }
  }
  span.yellowHighlight {
    background: ${props => props.theme.colors.primaryYellow};

    &::before,
    &::after {
      content: ' ';
      display: inline-block;
      padding: 0 5px;
      background: ${props => props.theme.colors.primaryYellow};
    }

    &::before {
      margin: 0 0 0 -5px;
    }

    &::after {
      margin: 0 -5px 0 0;
    }
  }
`

const ServiceContainer = styled.div`
  padding: 20px 0;
  margin: 0 0 40px;

  @media (min-width: 768px) {
    padding: 20px 60px;
  }
`

const ServiceLeadin = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.brand};
  font-size: 0.6rem;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const ServiceTitle = styled.h4`
  /* line-height: 1.7; */
`

const ServiceBody = styled.p`
  font-size: 0.8rem;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    padding-right: 100px;
  }
`

const Service = ({ title, leadin, children, link, topMargin = false }) => (
  <ServiceContainer>
    <ServiceLeadin>{leadin}</ServiceLeadin>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceBody>{children}</ServiceBody>
    <Button to={link.to}>{link.text}</Button>
  </ServiceContainer>
)

const Corporate = styled(Service)`
  grid-area: corporate;
`

const CoCreation = styled(Service)`
  grid-area: cocreation;
`

const Fund = styled(Service)`
  grid-area: fund;
`

const ImageContainer = styled.div`
  grid-area: img;
  margin: 0 0 20px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`
const ContactInterstitial = styled.div`
  padding: 80px;
  background-color: ${props => props.theme.colors.lighterGrey};
`

const CopyContainer = styled.div`
  width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Home = () => (
  <>
  
 

    <Head />
    <PageWrapper>
      <Hero>
        <ImageContainer>
          {/* <img src={heroImg} alt="Highline Beta" /> */}
        </ImageContainer>
        <h1>Purple Panther Marketing</h1>
        <h3 className="description">
         
        </h3>
        <CopyContainer>
        <p>
        Purple Panther Marketing is a community of like-minded professionals, which allows to reach synergy on every joined project, coherence between team members and clients, for the common development and progress.
        </p>
        <p>
        We are a network of over 70 creative marketing and technology firms as well as hand-picked talented artists and scientists from 34 countries around the world.
        </p>
      </CopyContainer>
       {/*  <CoCreation
          leadin=""
         
          link={{ to: '/blog', text: 'Our services' }}>
          
        </CoCreation>
        <Corporate
          leadin=""
          title="Purple Panther Marketing is a community of like-minded professionals, which allows to reach synergy on every joined project, coherence between team members and clients, for the common development and progress."
          link={{ to: '/training', text: 'Our services' }}>
          
        </Corporate>
        <Fund
          topMargin
          leadin=""
          title="We are a network of over 70 creative marketing and technology firms as well as hand-picked talented artists and scientists from 34 countries around the world."
          link={{ to: '/about', text: 'About us' }}>
          
        </Fund> */}
         {/* <Fund
          leadin="Venture Capital"
          title="One of the top pre-seed track records, globally"
          link={{ to: '/fund', text: 'Our investments' }}>
          We invest at the pre-seed and seed stages in co-creations and in
          startups in our accelerator programs. *
         </Fund>  */}
      </Hero>
    </PageWrapper>
    {/* <NewsSection posts={posts} /> */}
    <Portfolio title="Industry Expertise" companies={[{description:"Transportation and Logistics"}, {description:"Technology"},{description:"Education"}, {description:"Health and Wellness"},{description:"Real estate"}, {description:"Food"},{description:"Finance and Insurance"}, {description:"Construction and Renovation"}]}>
      
    </Portfolio>
    {/* <Clients /> */}
    <CareersInterstitial />
    <ContactInterstitial>
      <PageWrapper>
        <ContactForm />
      </PageWrapper>
    </ContactInterstitial>
    
  </>
)

export default Home




