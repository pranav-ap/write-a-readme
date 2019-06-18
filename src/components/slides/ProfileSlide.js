import React from 'react'

import Next from '../Next'
import Styles from './styles/ProfileSlide.module.scss'

const ProfileSlide = () => {
  return (
    <div className="columns" id={Styles.ProfileSlide}>
      <div className="column">
        <h1>ProfileSlide</h1>
        <Next/>
      </div>
    </div>
  )
}

export default ProfileSlide
