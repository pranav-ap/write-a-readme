import React from 'react'

import Next from '../Next'
import Styles from './styles/BuiltWithSlide.module.scss'

const BuiltWithSlide = () => {
  return (
    <div className="columns" id={Styles.BuiltWithSlide}>
      <div className="column">
        <h1>BuiltWithSlide</h1>
        <Next/>
      </div>
    </div>
  )
}

export default BuiltWithSlide
