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
      <link rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
    </Helmet>
  )
}

export default Head
