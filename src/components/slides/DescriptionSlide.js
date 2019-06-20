import React from 'react'

import Next from '../Next'
import Title from './components/Title'

import Styles from './styles/DescriptionSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const DescriptionSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.DescriptionSlide}>
      <div className="column">
        <Title title={'Describe the purpose of your project'}/>
        <Next/>
      </div>
    </div>
  )
}

export default DescriptionSlide
