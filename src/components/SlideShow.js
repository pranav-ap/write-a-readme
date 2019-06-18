import React from 'react'

import Styles from './styles/SlideShow.module.scss'

class SlideShow {
  constructor() {
    this.state = {
      active_slide: 0,
    }
  }

  render() {
    return (
      <div className="columns" id={Styles.SlideShow}>
        <div className="column">
          <h1>Slideshow</h1>
        </div>
      </div>
    )
  }
}

export default SlideShow
