import React from 'react'

import Next from '../Next'

import Styles from './styles/DescriptionSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const DescriptionSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.DescriptionSlide}>
      <div className="column">
        <h1 className={'is-size-2'}>Describe the purpose of your project</h1>
        <Next/>
      </div>
    </div>
  )
}

export default DescriptionSlide
