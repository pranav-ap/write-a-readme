import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Styles from "./styles/Footer.module.scss"

const Footer = () => {
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
    <footer className={Styles.Footer}>
      <h1 className={Styles.copyright}>Built with Gatsby & hosted on Netlify.</h1>
      <h1 className={Styles.copyright}>Copyright &copy; 2019 {data.site.siteMetadata.title}</h1>
    </footer>
  )
}

export default Footer
