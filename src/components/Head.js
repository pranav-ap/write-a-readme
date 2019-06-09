import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

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
    </Helmet>
  )
}

export default Head
