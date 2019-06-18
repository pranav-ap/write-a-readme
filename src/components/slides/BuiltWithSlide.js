import React from 'react'

import Next from '../Next'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/BuiltWithSlide.module.scss'

const BuiltWithSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.BuiltWithSlide}>
      <div className="column">
        <h1 className={'is-size-2'}>What tools did you use?</h1>
        <Next/>
      </div>
    </div>
  )
}

export default BuiltWithSlide
