import React, { Component } from 'react'

import Styles from './styles/Slideshow.module.scss'

const get_repo = () => {
  return (
    <div className={Styles.slide}>
      get_repo
    </div>
  )
}

const what_license = () => {
  return (
    <div className={Styles.slide}>
      what_license
    </div>
  )
}

const get_shields = () => {
  return (
    <div className={Styles.slide}>
      get_shields
    </div>
  )
}

const describe_project = () => {
  return (
    <div className={Styles.slide}>
      describe_project
    </div>
  )
}

const setup_for_development = () => {
  return (
    <div className={Styles.slide}>
      setup_for_development
    </div>
  )
}

const get_code_of_conduct = () => {
  return (
    <div className={Styles.slide}>
      get_code_of_conduct
    </div>
  )
}

const show_usage = () => {
  return (
    <div className={Styles.slide}>
      show_usage
    </div>
  )
}

class Slideshow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: {
        license: {
          type: '',
          path: '',
        },
        shields: [],
      },
    }
  }

  render() {
    return (
      <div id={Styles.Slideshow}>
        {get_repo()}
        {what_license()}
        {get_shields()}
        {describe_project()}
        {setup_for_development()}
        {get_code_of_conduct()}
        {show_usage()}
      </div>
    )
  }
}

export default Slideshow
