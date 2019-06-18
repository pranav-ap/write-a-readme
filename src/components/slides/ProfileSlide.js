import React from 'react'

import Next from '../Next'

import Styles from './styles/ProfileSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const ProfileSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.ProfileSlide}>
      <div className="column">
        <h1 className={'is-size-2'}>Profile</h1>
        <Next/>
      </div>
    </div>
  )
}

export default ProfileSlide
