

import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'



import Head from '../components/Head'
import HeroBanner from '../components/HeroBanner'
import PageWrapper from '../components/PageWrapper'
import CareersInterstitial from '../components/CareersInterstitial'
import Partner from '../components/Partner'
import ContactForm from '../components/ContactForm'

const CopyContainer = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`
const SectionTitle = styled.h2`
  margin: 60px 0;
`

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

const Partners = styled.div`
  @media (min-width: 768px) {
    margin: 80px 0 80px 180px;
    width: 60%;
  }
`

const Title = styled.h2`
  margin: 70px 0;
`

const ContactInterstitial = styled.div`
  padding: 80px;
  background-color: ${props => props.theme.colors.lighterGrey};
`

const Training = ({ partners }) => (
  <>
  <PageWrapper>
    <Head
      title="About Highline BETA"
      description={`Our team has run accelerators, launched and invested in companies, mentored founders, and worked inside enterprises. We have all \
developed the same fundamental belief: the future of corporate \
innovation is new venture development. Enterprises and startups that \
work together to co-create new ventures will find the future growth \
trajectories to win.`}
    />

    <HeroBanner title="Training">

    </HeroBanner>

    
      <CopyContainer>
        <p>
        We offer customized training programs and individual master classes oriented to straightening company’s brand in general and to improve management in specific areas.
	

        </p>
        <p>
        Experience shows that our training creates instant results and long-lasting positive changes. Our training is delivered in-person where available or in a webinar format.
        </p>
      </CopyContainer>
      <SectionTitle>Training topics:</SectionTitle>
      <DescriptionGrid>
        <Description>
          <h6>Reputation management through transparency and authenticity.</h6>
          
        </Description>
        <Description>
          <h6>Converting relative data into prescriptive solutions for your communications and marketing business goals.</h6>
          {/* <p>
            Our sprint model is designed to fast-track startups to pilot
            corporate partnership in a 100 days or less.
          </p> */}
        </Description>
        <Description>
          <h6>Corporate culture activation, organizational change, employee engagement. Brand embodiment.</h6>
          
        </Description>
        <Description>
          <h6>Brand management. Taking full advantage of your Brandbook.</h6>
        
        </Description>
        <Description>
          <h6>Self-audit to discover internal threads and stagnation.</h6>
       
        </Description>
        <Description>
          <h6>Creativity boosting workshops.</h6>
         
        </Description>
        <Description>
          <h6>Corporate shadow work.</h6>
         
        </Description>
        <Description>
          <h6>Working with conflict client. Negativity management.</h6>
         
        </Description>
      </DescriptionGrid>
     

    </PageWrapper>
    <ContactInterstitial>
      <PageWrapper>
        <ContactForm />
      </PageWrapper>
    </ContactInterstitial>
    {/* <CareersInterstitial /> */}
  </>
)

export default Training
