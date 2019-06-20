import React from 'react'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/SetupDevelopmentSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  return true
}

const SetupDevelopmentSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.SetupDevelopmentSlide}>
      <div className="column">
        <Title title={'Setup for Local Development'}/>
        <textarea className="textarea is-medium" placeholder="Write Here!" rows={5}/>
        <Next is_valid={() => is_valid()}/>
      </div>
    </div>
  )
}

export default SetupDevelopmentSlide
