import React from 'react'

import Next from '../Next'
import Styles from './styles/SetupDevelopmentSlide.module.scss'

const SetupDevelopmentSlide = () => {
  return (
    <div className="columns" id={Styles.SetupDevelopmentSlide}>
      <div className="column">
        <h1>SetupDevelopmentSlide</h1>
        <Next/>
      </div>
    </div>
  )
}

export default SetupDevelopmentSlide
