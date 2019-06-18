import React from 'react'

import Next from '../Next'

import Styles from './styles/SetupDevelopmentSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const SetupDevelopmentSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.SetupDevelopmentSlide}>
      <div className="column">
        <h1 className={'is-size-2'}>Setup for Local Development</h1>
        <Next/>
      </div>
    </div>
  )
}

export default SetupDevelopmentSlide
