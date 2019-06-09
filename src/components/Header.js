import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Styles from "./styles/Header.module.scss"

const Header = () => {
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
    <nav className={`navbar ${Styles.Header} is-transparent`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to={`/`}>
          <h1 className={Styles.title}>{data.site.siteMetadata.title}</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Header

