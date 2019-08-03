import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Styles from './styles/Header.module.scss'
import { useStoreActions } from 'easy-peasy'

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

  const set_slide = useStoreActions(actions => actions.ui.set_slide)

  return (
    <nav className={`navbar ${Styles.Header} is-transparent`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1
          className={Styles.title}
          onClick={(e) => {
            e.preventDefault()
            set_slide(0)
          }}>{data.site.siteMetadata.title}</h1>
      </div>
    </nav>
  )
}

export default Header

