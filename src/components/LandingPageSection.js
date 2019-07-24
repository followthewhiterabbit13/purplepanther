import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from './Link'

const SectionContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`

const TextContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 450px;

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 60px;
  }
`

const SectionTitle = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 16px;
  margin-bottom: 10px;
  text-transform: uppercase;
`

const SectionSubTitle = styled.h1`
  margin-top: 0;
`

const SectionDescription = styled.p`
  margin-top: 0;

  br {
    line-height: 3;
  }

  @media (max-width: 768px) {
    ${props => props.mobileCollapse && `display: none;`};
  }
`

const LandingPageSection = ({
  alt,
  anchor,
  description,
  children,
  image,
  link,
  mobileCollapse = false,
  reverse = false,
  subTitle,
  title,
}) => {
  const renderBody = () =>
    description ? (
      <SectionDescription
        mobileCollapse={mobileCollapse}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    ) : (
      <SectionDescription mobileCollapse={mobileCollapse}>
        {children}
      </SectionDescription>
    )
  return (
    <SectionContainer reverse={reverse}>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubTitle>{subTitle}</SectionSubTitle>
        {renderBody()}
        {!!link && link.external ? (
          <Link href={link.to}>{link.text}</Link>
        ) : anchor ? (
          <a href={link.to}>{link.text}</a>
        ) : (
          link && <Link to={link.to}>{link.text}</Link>
        )}
      </TextContainer>
      <ImageContainer>
        <img src={image} alt={alt} />
      </ImageContainer>
    </SectionContainer>
  )
}

LandingPageSection.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  link: PropTypes.object,
  mobileCollapse: PropTypes.bool,
  reverse: PropTypes.bool,
  subTitle: PropTypes.string,
  title: PropTypes.string,
}

export default LandingPageSection
