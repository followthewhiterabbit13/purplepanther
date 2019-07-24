import React from 'react'
import { SiteData, Head } from 'react-static'

const MetaHeader = ({ title, description, keywords, path, image }) => (
  <SiteData>
    {({
      siteTitle = 'Highline Beta',
      siteUrl,
      metaDescription,
      metaKeywords,
      twitterHandle,
    }) => (
      <Head>
        <title>{title || siteTitle}</title>
        <meta name="description" content={description || metaDescription} />
        <meta
          name="google-site-verification"
          content="QnbsaejLQgDcflKCW-T3V4RDRomPhKj0jmsJjZ_Q_Ck"
        />
        <meta name="keywords" content={keywords || metaKeywords} />
        {/* <link rel="icon" type="image/png" href={favicon} /> */}

        {/* OPEN GRAPH TAGS */}
        <meta property="og:url" content={`${siteUrl}${path}`} />
        <meta
          property="og:title"
          content={title ? `${title} | ${siteTitle}` : siteTitle}
        />
        <meta
          property="og:description"
          content={description || metaDescription}
        />
        {image && <meta property="og:image" content={image} />}
        {/* TWITTER TAGS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta property="twitter:title" content={title || siteTitle} />
        <meta
          name="twitter:description"
          content={description || metaDescription}
        />
        {image && <meta property="twitter:image" content={image} />}
      </Head>
    )}
  </SiteData>
)

export default MetaHeader
