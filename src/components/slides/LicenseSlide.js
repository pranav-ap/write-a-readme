import React from 'react'

import Next from '../Next'
import Styles from './styles/LicenseSlide.module.scss'

const LicenseSlide = () => {
  return (
    <div className="columns" id={Styles.LicenseSlide}>
      <div className="column">
        <h1>LicenseSlide</h1>
        <Next/>
      </div>
    </div>
  )
}

export default LicenseSlide
