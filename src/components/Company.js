import React from 'react'
import styled from 'styled-components'

import _Accent from './Accent'
import Link from './Link'

// import defaultImage from '../img/grey-circle.svg'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 70px auto 1fr;
    grid-gap: 10px;
    margin-bottom: 0;
  }
`

const ImageContainer = styled.div`
  text-align: left;
`

const Img = styled.img`
  display: block;
  height: 65px;
  width: auto;
  margin-bottom: 5px;
`

const Main = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.darkerGrey};
  text-transform: initial;
`

const Accent = styled(_Accent)`
  color: ${props => props.theme.colors.darkerGrey};
  margin: 10px 0;
`

const extractImage = logo => {
  const imgUrl = logo?.fields?.file.url
  return imgUrl //? imgUrl : defaultImage
}

const addDetails = (type, { lastFundingRound, industry, fundingDetails }) => {
  const exited = hasExited(lastFundingRound)
  if (exited) {
    const ExitAccent = styled(Accent)`
      color: ${props => props.theme.colors.brand};
    `
    return (
      <>
        <ExitAccent>{lastFundingRound}</ExitAccent>
        <Main>{fundingDetails}</Main>
        <Main>{fundingDetails}</Main>
      </>
    )
  }
  return (
    <>
      <Accent>{industry}</Accent>
      <Main>{fundingDetails}</Main>
      <Main>{fundingDetails}</Main>
    </>
  )
}

const hasExited = round => round[0] === 'Acquired'

const Logo = ({ url, imgUrl, name }) =>
  url ? (
    <Link href={url}>
      <Img src={imgUrl} alt={name} />
    </Link>
  ) : (
    <ImageContainer>
      <Img src={imgUrl} alt={name} />
    </ImageContainer>
  )

const Details = ({ lastFundingRound, fundingDetails, description }) =>
  hasExited(lastFundingRound) ? (
    <div>Acquired by {fundingDetails}</div>
  ) : (
    description && <div>{description}</div>
  )

const addPeriod = text => (text[text.length - 1] === '.' ? text : text + '.')

const Company = ({
  logo = '',
  name = '',
  industry = '',
  url = '',
  type = '',
  lastFundingRound = '',
  fundingDetails = '',
  description = '',
}) => {
  const imgUrl = extractImage(logo)

  return (
    <Container>
      <Logo url={url} imgUrl={imgUrl} name={name} />
      {industry && <Accent>{industry}</Accent>}

      <Details
        lastFundingRound={lastFundingRound}
        fundingDetails={fundingDetails && addPeriod(fundingDetails)}
        description={description}
      />
    </Container>
  )
}

export default Company
