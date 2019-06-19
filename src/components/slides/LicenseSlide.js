import React from 'react'

import Next from '../Next'

import Styles from './styles/LicenseSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  return true
}

const LicenseSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.LicenseSlide}>
      <div className="column">
        <h1 className={`is-size-2 ${BaseStyles.title}`}>What license are you using?</h1>

        <Next is_valid={() => is_valid()}/>
      </div>
    </div>
  )
}

export default LicenseSlide
