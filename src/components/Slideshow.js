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
      <div>
        {get_repo()}
        {what_license()}
        {get_shields()}
        {describe_project()}
        {setup_for_development()}
        {get_code_of_conduct()}
      </div>
    )
  }
}

export default Slideshow


// 1. Get url - username and project name
// 2. get shield links
// 3. get license
// 4. describe the project - short - long
// 5. Setup for development
//   6. external Usage - going to be used in other people code
//   8. Screen shots / gifs
// 9. Code of conduct
