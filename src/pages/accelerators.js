import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'

import Head from '../components/Head'
import HeroBanner from '../components/HeroBanner'
import PageWrapper from '../components/PageWrapper'

import HowItWorks from '../components/HowItWorks'
import Why from '../components/Why'
import AcceleratorBox from '../components/AcceleratorBox'

import ConnectBox from '../components/ConnectBox'
import ContactForm from '../components/ContactForm'

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

const CorporateAccelerators = ({ accelerators }) => (
  <>
    <Head
      title="Corporate Accelerators"
      description="Highline BETA corporate programs allow enterprises to innovate faster."
    />

    <HeroBanner title="Partner with today’s top startups to shape tomorrow.">
      Drive corporate growth through collaborations with top startups.
    </HeroBanner>

    <PageWrapper>
      <HowItWorks
        items={[
          {
            title: 'Launch',
            subTitle: 'Discover challenges and opportunities for growth',
            body: `We define a cohort theme, focusing on growth opportunities beyond your core business. We build a cohort of startups that will drive value through commercial collaborations.`,
          },
          {
            title: 'Program',
            subTitle: 'Identify and validate  collaboration opportunities',
            body: `Milestone-driven programming for both startups and corporate
          stakeholders shapes the goals and terms of a pilot.`,
          },
          {
            title: 'Pilots and partnerships',
            subTitle: 'Launch and test pilot or proof-of-concept projects',
            body: `With a pilot or proof-of-concept in place, you make an informed
          decision whether to scale the partnership across your business.`,
          },
        ]}
      />

      <Why
        items={[
          {
            title: 'Drive a multi-faceted portfolio approach.',
            body:
              'Enable partnerships, investments, inorganic growth, and co-creation.',
            shape: { color: 'brand', type: 'square' },
          },
          {
            title: 'Reduce risk and other constraints.',
            body:
              'Validate partnerships with startups through pilots and proof-of-concept projects.',
            shape: { color: 'primaryBlue', type: 'triangle' },
          },
          {
            title: 'We are invested - literally.',
            body:
              'Create aligned interests and shared risk in the success of collaborations with investment from Highline BETA.',
            shape: { color: 'primaryYellow', type: 'circle' },
          },
        ]}
        title="Why do corporations launch accelerators with us?"
      />
    </PageWrapper>

    <ConnectBox
      title="Are you running a high-growth startup?"
      button="Apply Now"
      link="https://www.f6s.com/highlinebetaofficehours2019/connect">
      Highline Beta is searching for early-stage startups with strong potential
      to collaborate with our clients.
      <br /> <br />
      We&#39;re embarking on a tour across Canada to meet with founders for 1:1
      office hours. Apply today, and learn more about the exciting programs
      we&#39;re running this year.
    </ConnectBox>

    <ProgramContainer>
      <PageWrapper>
        <PartnerTitle>Current programs</PartnerTitle>
        We&#39;re speeding paths to commercial deals with startups for the
        world&#39;s leading enterprises.
        <AcceleratorContainer>
          {accelerators.map(a => (
            <AcceleratorBox {...a} key={a.name} />
          ))}
        </AcceleratorContainer>
      </PageWrapper>
    </ProgramContainer>
  </>
)

export default withRouteData(CorporateAccelerators)
