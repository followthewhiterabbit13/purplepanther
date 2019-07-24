import React from 'react'
import { useRouteData } from 'react-static'
import PageWrapper from '../components/PageWrapper'
import ConnectBox from '../components/ConnectBox'
//
import { Link } from 'components/Router'

export default function Blog() {
  const { posts } = useRouteData()
  return (
   <PageWrapper>
      <ConnectBox
      title="Under Construction"
      // button="Apply Now"
      // link="https://www.f6s.com/highlinebetaofficehours2019/connect">
      // Highline Beta is searching for early-stage startups with strong potential
      // to collaborate with our clients.
      // <br /> <br />
      // We&#39;re embarking on a tour across Canada to meet with founders for 1:1
      // office hours. Apply today, and learn more about the exciting programs
      // we&#39;re running this year.
      >
    </ConnectBox>
   </PageWrapper>
  )
}
