import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { title, description, author } = site.siteMetadata;
  const location = props?.location?.href ?? 'foo'

  return (
    <Helmet htmlAttributes={{ lang: 'en-us' }}>
      <link rel='canonical' href={location} />
      <title>{title}</title>
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='twitter:site' content={author} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:creator' content='Matt Christians' />
      <meta name='twitter:card' content='summary' />
    </Helmet>
  )
}

export default Seo
