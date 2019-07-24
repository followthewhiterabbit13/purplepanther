import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'

import Head from '../components/Head'
import HeroBanner from '../components/HeroBanner'
import PageWrapper from '../components/PageWrapper'
import Link from '../components/Link'
import Why from '../components/Why'

const locationMap = {
  toronto: 'Toronto, ON',
  vancouver: 'Vancouver, BC',
  nyc: 'New York City, New York',
  remote: 'Anywhere',
}

const JobBody = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  padding: 20px 0;
`

const JobsHeader = styled(JobBody)`
  border-bottom: 2px solid ${props => props.theme.colors.black};
  font-weight: bold;
  margin-bottom: 5px;
  padding-bottom: 5px;
`

const JobsCell = styled.div`
  &:nth-child(2) {
    padding-right: 80px;
  }
`

const JobsHeading = styled(JobsCell)`
  font-size: 1.2rem;
`

const JobsContainer = styled.div`
  margin: 20px 0 80px;
`

const JobTitle = styled(Link)`
  text-transform: initial;
`

const Title = styled.h4`
  margin: 0 0 10px;
  padding: 0;

  span {
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

const JobsTable = ({ jobs }) => (
  <JobsContainer>
    <JobsHeader>
      <JobsHeading>Position</JobsHeading>
      <JobsHeading>Location</JobsHeading>
    </JobsHeader>

    {jobs.map(j => (
      <JobBody key={j.title}>
        <JobTitle href={j.url}>{j.title}</JobTitle>
        <JobsCell>{locationMap[j.location]}</JobsCell>
      </JobBody>
    ))}
  </JobsContainer>
)

const Careers = ({ jobs }) => {
  const internalJobs = jobs.filter(j => j.area === 'core')
  const otherJobs = jobs.filter(j => j.area !== 'core')

  return (
    <>
      <Head
        title="Careers"
        description="Highline BETA is a venture capital and startup co-creation company. We’re on a journey to discover, co-create, and fund better startups"
      />

      <HeroBanner title="Work with us">
        We’re on a mission to discover, co-create, and fund better startups.
      </HeroBanner>
      <PageWrapper>
        <Why
          items={[
            {
              title: 'Build stuff that matters.',
              body:
                'We’re investing in startups and co-creating ventures alongside some of the world’s leading enterprises.',
              shape: { color: 'brand', type: 'square' },
            },
            {
              title: 'We invest in our team.',
              body:
                'Wellness benefits, flexible vacation policies, and RRSP contributions help us do our best work.',
              shape: { color: 'primaryBlue', type: 'triangle' },
            },
            {
              title: 'Experimentation > perfection.',
              body:
                'We cultivate a bias towards action and experimentation that allows us to learn and iterate.',
              shape: { color: 'primaryYellow', type: 'circle' },
            },
          ]}
        />
        <Why
          items={[
            {
              title: 'Work that works for you.',
              body:
                'We commit to giving you the tools, the tech, and the professional freedom you need to make a real difference for the enterprises and startups we work with.',
              shape: { color: 'brand', type: 'square' },
            },
            {
              title: 'Flexibility that fits your role.',
              body:
                'We all work differently, and so believe in flexibility that fits your role. We focus on results, balance, and sustained productivity.',
              shape: { color: 'primaryBlue', type: 'triangle' },
            },
            {
              title: 'Get outside the building.',
              body:
                'We value the entrepreneurship and innovation community, and we encourage our team to get involved in the ways that matter most to them. ',
              shape: { color: 'primaryYellow', type: 'circle' },
            },
          ]}
        />
        <Title>
          Roles on the <span>Highline Beta core</span> team
        </Title>
        <JobsTable jobs={internalJobs} />

        <Title>
          Roles with <span>Highline Beta ventures</span>
        </Title>
        <JobsTable jobs={otherJobs} />
      </PageWrapper>
    </>
  )
}
export default withRouteData(Careers)
