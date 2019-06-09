import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "./styles/index.scss"
import Styles from "./styles/Layout.module.scss"

const Layout = (props) => {
  return (
    <div id={Styles.Layout}>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
