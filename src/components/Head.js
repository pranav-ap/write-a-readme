import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <script src={"https://use.fontawesome.com/5f6704beb1.js"}/>
      <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma-checkradio@1.1.0/dist/css/bulma-checkradio.min.css"/>
    </Helmet>
  )
}

export default Head
