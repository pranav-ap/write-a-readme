import React from 'react'

import Next from '../Next'

import Styles from './styles/ProfileSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  return false
}

const ProfileSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.ProfileSlide}>
      <div className="column">
        <h1 className={`is-size-2 ${BaseStyles.title}`}>Basic Profile</h1>

        <div className="field">
          <div className="control has-icons-left">
            <input className="input is-large is-rounded" type="text" placeholder="Username"/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"/>
            </span>
          </div>

          <div className="control has-icons-left">
            <input className="input is-large is-rounded" type="text" placeholder="Project Name"/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"/>
            </span>
          </div>
        </div>

        <Next is_valid={is_valid}/>
      </div>
    </div>
  )
}

export default ProfileSlide
