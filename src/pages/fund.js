import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'

import Head from '../components/Head'
import HeroBanner from '../components/HeroBanner'
import PageWrapper from '../components/PageWrapper'
import InfoSection from '../components/InfoSection'
import Portfolio from '../components/Portfolio'

// import ffLogo from '../img/logos/femalefunders-logomark.png'
// import hlvcLogo from '../img/logos/hlvc-logomark.png'

const FeatureSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 40px 80px;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    text-align: center;
    padding: 40px 0;
  }
`
const FeatureStyle = styled.div`
  text-align: center;
`

const FeatureRecord = styled.h2`
  color: ${props => props.theme.colors.brand};
  font-weight: normal;
  line-height: 1;
  margin: 0 0 20px;
`

const Feature = ({ kpi, description }) => (
  <FeatureStyle>
    <FeatureRecord>{kpi}</FeatureRecord>
    {description}
  </FeatureStyle>
)

const InfoContainer = styled.div`
  display: grid;
  grid-gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Funds = () => (
  <>
    <Head
      title="Fund"
      path="/fund"
      description={`Highline BETA corporate programs allow enterprises to innovate faster. \
We believe in taking a portfolio approach to innovation. \
Together, we’ll create a tailored process to take ideas to launch and scale.`}
    />

    <HeroBanner title="From corporate challenges to investable opportunities.">
      We invest in our co-creations, and corporate accelerator startups.
    </HeroBanner>

    <PageWrapper>
      <InfoContainer>
        <InfoSection
          leadin="Highline VC"
          title="Our pre-seed investing roots"
          body="Highline VC was formed to attract the best founders and our Partners made and managed investments collectively worth over $650M+."
          // img={hlvcLogo}
        />
        <InfoSection
          leadin="Female Funders"
          title="Empowering women who shape the future of funding"
          body="Through Female Funders, we are building women-led funding vehicles for both angel investors and entrepreneurs."
          // img={ffLogo}
        />
      </InfoContainer>

      <FeatureSection>
        <Feature kpi="6.6x" description="Tracking performance" />
        <Feature kpi="1.56x" description="Cash on cash distribution" />
        <Feature kpi="7" description="Meaningful exits (3x+)" />
        <Feature kpi="$1B+" description="Total equity value created" />
      </FeatureSection>
    </PageWrapper>

    <Portfolio title="Investment track record" companies={["Transportation and Logistics", "Technology"]}>
      *Performance data shown represent past performance, which is not a
      guarantee of future results. Any historical returns or unrealized returns
      may not actually reflect actual future performance. All securities involve
      risk and may result in loss. Startup investing is a particularly risky
      asset class and may result in total loss.
    </Portfolio>
  </>
)

export default withRouteData(Funds)
