import React from 'react'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/DescriptionSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  return true
}

const DescriptionSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.DescriptionSlide}>
      <div className="column">
        <Title title={'Describe the purpose of your project'}/>
        <textarea className="textarea is-medium" placeholder="Write Here!" rows={5}/>
        <Next is_valid={() => is_valid()}/>
      </div>
    </div>
  )
}

export default DescriptionSlide
