import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'

// import render from '../utils/renderToReact'

import Head from '../components/Head'
import HeroBanner from '../components/HeroBanner'
import PageWrapper from '../components/PageWrapper'
import CareersInterstitial from '../components/CareersInterstitial'
import Partner from '../components/Partner'
import ContactForm from '../components/ContactForm'
import HowItWorks from '../components/HowItWorks'
import Why from '../components/Why'

const CopyContainer = styled.div`
  width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Partners = styled.div`
  @media (min-width: 768px) {
    margin: 80px 0 80px 180px;
    width: 60%;
  }
`

const Title = styled.h3`
  margin: 70px 0;
`

const ContactInterstitial = styled.div`
  padding: 80px;
  background-color: ${props => props.theme.colors.lighterGrey};
`

const About = () => (
  <>
    <Head
      title="About Highline BETA"
      description={`Our team has run accelerators, launched and invested in companies, mentored founders, and worked inside enterprises. We have all \
developed the same fundamental belief: the future of corporate \
innovation is new venture development. Enterprises and startups that \
work together to co-create new ventures will find the future growth \
trajectories to win.`}
    />

    <HeroBanner title="About Us">
    We are visionaries and innovators 
    
    </HeroBanner>

    <PageWrapper>
      <CopyContainer>
        <p>
        Working in creative, technology, strategy, and data science to create experiences that keep brand promises so that every interaction is an opportunity to build trust and loyalty.
  {/* Purple Panther Marketing aggregate a group of diverse personalities, nationalities and talents into one enterprise around the 5 crucial inner values: */}
        </p>
        <p>
        We use data to help us identify opportunities, technology to help us take advantage of them, and emotion to make the resulting experiences magical.
        </p>
      </CopyContainer>

      <Title></Title>
      {/* <Partners>
        {partners
          .sort((a, b) => a.order - b.order)
          .map((p, idx) => (
            <Partner
              key={p.id}
              image={p.img}
              name={p.name}
              title={p.title}
              linkedInUrl={p.linkedinUrl}
              twitterHandle={p.twitterHandle}
              reverse={idx % 2 > 0}
              rest={p}>
              {render(p.bio)}
            </Partner>
          ))}
      </Partners> */}
        
  

  <Why
        items={[
          {
            title: 'Passion',
            body:
              'about an idea is at the core of any business. Our passion is to translate your business idea into a powerful message and use the most optimal means to communicate it to the right audience.',
            shape: { color: 'primaryYellow', type: 'triangle' },
          },
          {
            title: 'Ambition',
            body:
              'Our goal is to make your company a leader in your field. We also understand that the best decision sometimes required to turn away from personal ambition for the purpose of strategic advantage of a brand.',
            shape: { color: 'primaryYellow', type: 'triangle' },
          },
          {
            title: 'Energy',
            body:
              'This is what moves your business forward. The same energy fills us. We multiply your energy and help you to find focus.',
            shape: { color: 'primaryYellow', type: 'triangle' },
          }]}
        title=" Purple Panther Marketing aggregate a group of diverse personalities, nationalities and talents into one enterprise around the 5 crucial inner values:"
      />
      <Why items={[{
            title: 'Hard work',
            body:
              'Finding a right solution is a hard work. We want to be authors of effective and inspiring solutions, which you will be proud of.',
            shape: { color: 'primaryYellow', type: 'triangle' },
          },
          {
            title: 'Challenge',
            body:
              'Our business is to find something new where everything seems to be said and done before. It is a challenge which we are ecstatic take on in every new project.',
            shape: { color: 'primaryYellow', type: 'triangle' },
          }
        ]}/>
  <HowItWorks
        items={[
          {
            title: 'Connectivity',
            // subTitle: 'Discover challenges and opportunities for growth',
            body: `Purple Panther Marketing believes in importance of every personal or professional connection we create in our lives. There are no coincidences. We appreciate each client as an opportunity to learn about our strengths, develop our competences and fulfill our mission.`,
          },
          {
            title: 'Constant change',
            // subTitle: 'Identify and validate  collaboration opportunities',
            body: `The only constant in life is change. We are committed to life-long learning and discovering of new ways, tools and ideas. Success of any business today is not possible without streamlined business processes and usage of the right technology, which constant changes. We strive on our technology and project management competences.`,
          },
          {
            title: 'Creativity',
            // subTitle: 'Launch and test pilot or proof-of-concept projects',
            body: `Life is a creation and everyone creates their own life. We believe that “beauty will save the world”. Our creative team is dedicated to nothing less that make your brand timeless and resonating with your audience’s emotions and deepest desires by making your message into art.`,
          },
        ]}
      />
 
  
  
  
    </PageWrapper>
    {/* <ContactInterstitial>
      <PageWrapper>
        <ContactForm />
      </PageWrapper>
    </ContactInterstitial> */}
    {/* <CareersInterstitial /> */}
  </>
)



export default About