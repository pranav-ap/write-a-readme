import React from 'react'

import Next from '../Next'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/BuiltWithSlide.module.scss'
import Title from './components/Title'

const BuiltWithSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.BuiltWithSlide}>
      <div className="column">
        <Title title={'What tools did you use?'}/>
        <Next/>
      </div>
    </div>
  )
}

export default BuiltWithSlide
