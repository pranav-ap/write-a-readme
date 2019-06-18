import React from 'react'

import Next from '../Next'
import Styles from './styles/DescriptionSlide.module.scss'

const DescriptionSlide = () => {
  return (
    <div className="columns" id={Styles.DescriptionSlide}>
      <div className="column">
        <h1>DescriptionSlide</h1>
        <Next/>
      </div>
    </div>
  )
}

export default DescriptionSlide
