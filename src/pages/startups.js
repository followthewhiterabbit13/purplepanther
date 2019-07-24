import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'

import Head from '../components/Head'
import _PageWrapper from '../components/PageWrapper'
import HeroBanner from '../components/HeroBanner'
import Company from '../components/Company'
import Clients from '../components/Clients'
import StartupContactForm from '../components/StartupContactForm'
import AcceleratorBox from '../components/AcceleratorBox'

// import heroImage from '../img/heros/startups-hero.svg'

const DescriptionGrid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 40px;
    margin: 40px 0 60px 80px;
    p {
      margin-bottom: 0;
    }

    h6 {
      margin-top: 0;
    }
  }
`
const Description = styled.div``

const PageWrapper = styled(_PageWrapper)`
  margin-bottom: 80px;
`

const Portfolio = styled.div`
  max-width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin: 40px 0 40px 80px;
  }
`

const SectionTitle = styled.h2`
  margin: 60px 0;
`

const ContactContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryYellow};
`
const ContactWrapper = styled(PageWrapper)`
  padding: 80px 0 0;
`

const PartnerTitle = styled.h2`
  text-align: left;
  font-weight: regular;
  padding: 0 0 20px;
`

const ProgramContainer = styled.div`
  background-color: ${props => props.theme.colors.offWhite};
  padding: 80px 0;
`

const AcceleratorContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-gap: 40px;

  @media (min-width: 768px) {
    margin: 40px -10px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Page = () => (
  <>
    <Head title="Scale your startup with Highline Beta" />
    <HeroBanner title="Scale your startup with us" marginLeft >
      We work with ambitious founders to unlock the next stage of growth. We
      launch and scale enterprise pilots, commercialize products, and identify
      industry opportunities with support from our corporate, and startup
      partners worldwide.
    </HeroBanner>
    <PageWrapper>
      <SectionTitle>About our programs</SectionTitle>
      <DescriptionGrid>
        <Description>
          <h6>No Equity</h6>
          <p>
            We take no equity investment upfront; opportunity for follow-on
            investment from Highline Beta and Founding Partners
          </p>
        </Description>
        <Description>
          <h6>Speed</h6>
          <p>
            Our sprint model is designed to fast-track startups to pilot
            corporate partnership in a 100 days or less.
          </p>
        </Description>
        <Description>
          <h6>Mentorship</h6>
          <p>
            Through tailored programming and 1:1 coaching, the program helps
            startups get to a proof-of-concept faster.
          </p>
        </Description>
        <Description>
          <h6>Access to Scale</h6>
          <p>
            Our enterprise network of leading collaborators provides an
            industry-wide ‘unfair advantage’ paired with product validation and
            scale. Amplify your brand awareness while fueling growth.
          </p>
        </Description>
        <Description>
          <h6>Access to Funding</h6>
          <p>
            Potential funding and access to other institutional investors via
            the Highline Beta network.
          </p>
        </Description>
      </DescriptionGrid>

      <SectionTitle>Our Portfolio</SectionTitle>
      <Portfolio>
        {/* {companies.map(c => (
          <Company key={c.slug} {...c} />
        ))} */}
      </Portfolio>
    </PageWrapper>
    <Clients />

    <ProgramContainer>
      <PageWrapper>
        <PartnerTitle>Current programs</PartnerTitle>
        We&#39;re speeding paths to commercial deals with startups for the
        world&#39;s leading enterprises.
        <AcceleratorContainer>
          {/* {accelerators.map(a => (
            <AcceleratorBox {...a} key={a.name} />
          ))} */}
        </AcceleratorContainer>
      </PageWrapper>
    </ProgramContainer>

    <ContactContainer>
      <ContactWrapper>
        <StartupContactForm />
      </ContactWrapper>
    </ContactContainer>
  </>
)

export default withRouteData(Page)
