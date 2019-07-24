import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'
import Link from '../components/Link'
import PageWrapper from '../components/PageWrapper'

const Wrapper = styled(PageWrapper)`
  max-width: 960px;
  margin: 40px auto 80px;

  h4 {
    margin: 40px 0 20px;
  }

  ul,
  ol {
    margin-left: 40px;
    font-family: ${props => props.theme.fonts.secondary};

    li {
      color: ${props => props.theme.fonts.darkerGrey};
      margin-bottom: 20px;
    }

    ul,
    ol {
      margin-left: 80px;
    }
  }
`

const Date = styled.div`
  margin: 40px 0 20px;
  font-family: ${props => props.theme.fonts.mono};
`

export default () => (
  <Wrapper>
    <Head title="Privacy Policy" />
    <h2>PRIVACY POLICY</h2>
    {/* <Date>Last Updated: January 31, 2018</Date>

    <p>
      Highline BETA (“we”/”us”) is committed to protecting your privacy. We make
      the website, www.highlinebeta.com (the “Website”) available. This Privacy
      Policy describes how we collect, store, use and distribute information
      about our users through the Website
    </p>

    <h4>Consent</h4>
    <p>
      By using the Website or our Services you consent to the use of your
      Personal Information as described in this Privacy Policy. Except as set
      forth in this Privacy Policy, your Personal Information will not be used
      for any other purpose without your consent. We will not actively collect
      Personal Information for the purpose of sale or marketing in a way that
      specifically identifies the individual. In other words, we don’t sell
      customer lists. You may withdraw your consent to our processing of your
      Personal Information at any time. However, withdrawing consent may result
      in your inability to continue using the Website and/or the Services.
    </p>

    <h4>Personal Information</h4>
    <p>
      We collect information from you when you subscribe to a newsletter or use
      the contact pages to get in touch with us. If you sign up for an email
      newsletter, we collect your email address and store it with our mailing
      list provider (MailChimp). If you use our contact form, we collect your
      email address and name as part of initiating that conversation.
    </p>

    <p>We may use the information we collect from you in the following ways:</p>
    <ul>
      <li>
        To send periodic emails from our newsletter with new content and updates
        about our products and services
      </li>
      <li>
        To follow up after correspondence (live chat, email or phone inquiries)
      </li>
    </ul>

    <h4>How do we protect your information?</h4>
    <p>
      We only provide articles and information. We never ask for credit card
      numbers. Emails are handled either through Mailchimp (for newsletter
      subscriptions) or Google Apps (for direct contact). Your personal
      information is contained behind secured networks and is only accessible by
      a limited number of persons who have special access rights to such
      systems, and are required to keep the information confidential.
    </p>
    <h4>Cookies</h4>
    <p>
      Cookies are small files that a site or its service provider transfers to
      your computer’s hard drive through your Web browser (if you allow) that
      enables the site’s or service provider’s systems to recognize your browser
      and capture and remember certain information. Visitors who do not wish to
      have cookies placed on their computers should set their browsers to refuse
      cookies before using our website. Turning cookies off should in no way
      limit your ability to access our website.
    </p>

    <p>
      WordPress (our web host) uses cookies to help identify and track visitors,
      their usage, and their website access preferences. You can view their
      privacy policy here.
    </p>

    <p>
      Google Analytics (our web analytics provider) uses cookies to help us
      compile aggregate data about site traffic and site interaction so that we
      can offer better site experiences and products in the future. Google’s
      privacy policy is here.
    </p>

    <h4>Third Parties</h4>
    <p>
      We do not sell, trade, or otherwise transfer to outside parties your
      Personally Identifiable Information unless we provide users with advance
      notice. This does not include website hosting partners and other parties
      who assist us in operating our website, conducting our business, or
      serving our users, so long as those parties agree to keep this information
      confidential. We may also release information when it’s release is
      appropriate to comply with the law, enforce our site policies, or protect
      ours or others’ rights, property or safety.
    </p>
    <p>
      We do not include or offer third-party products or services on our
      website. We may link to third party sites that offer products or services
      under their own privacy policy and terms of use, but those links will not
      include PII.
    </p>

    <h4>Children’s Online</h4>
    <p>
      Privacy Protection Act (“COPPA”) The Children’s Online Privacy Protection
      Act (“COPPA”) requires that online service providers obtain parental
      consent before they knowingly collect personally identifiable information
      online from children who are under 13. We do not knowingly collect or
      solicit personally identifiable information from children under 13; if you
      are a child under 13, please do not attempt send any personal information
      about yourself to us. If we learn we have collected personal information
      from a child under 13, we will delete that information as quickly as
      possible. If you believe that a child under 13 may have provided us
      personal information, please contact us at info@highlinebeta.com.
    </p>

    <h4>Security</h4>
    <p>
      The security of your Personal Information is important to us. We use
      commercially reasonable efforts to store and maintain your Personal
      Information in a secure environment. We take technical, contractual,
      administrative, and physical security steps designed to protect Personal
      Information that you provide to us. We have implemented procedures
      designed to limit the dissemination of your Personal Information to only
      such designated staff as are reasonably necessary to carry out the stated
      purposes we have communicated to you. You are also responsible for helping
      to protect the security of your Personal Information. For instance, never
      give out your email account information for the Services to third parties
      password.
    </p>

    <h4>Amendment of the Policy</h4>
    <p>
      We reserve the right to change this Privacy Policy at any time, and we
      include a last-updated date at the top of the page. We recommend that you
      print a copy of this Privacy Policy for your reference and revisit this
      policy from time to time to ensure you are aware of any changes. Your
      continued use of the Website signifies your acceptance of any changes.
    </p>

    <h4>Contact us</h4>
    <p>
      If there are any questions, comments or suggestions regarding this privacy
      policy, please contact us at{' '}
      <Link href="mailto:info@highlinebeta.com">info@highlinebeta.com</Link>.
    </p> */}
  </Wrapper>
)
