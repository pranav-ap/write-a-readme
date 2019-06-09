import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

import Styles from "./styles/404.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404"/>
      <div className={Styles.NotFound}>
        <h1 className={Styles.msg}>Page not found</h1>
        <Link to="/"><p className={Styles.redirect}>Take me Home</p></Link>
      </div>
    </Layout>
  )
}

export default NotFound