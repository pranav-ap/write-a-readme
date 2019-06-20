import React from 'react'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/ProfileSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  const username = document.getElementById('username').value
  const project_name = document.getElementById('project-name').value

  return username && project_name
}

const ProfileSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.ProfileSlide}>
      <div className="column">
        <Title title={'Basic Profile'}/>

        <div className="field">
          <div className="control has-icons-left">
            <input id={'username'} className="input is-large is-rounded" type="text" placeholder="Username"/>
            <span className="icon is-small is-left">
              <i className="fa fa-user"/>
            </span>
          </div>

          <div className="control has-icons-left">
            <input id={'project-name'} className="input is-large is-rounded" type="text" placeholder="Project Name"/>
            <span className="icon is-small is-left">
              <i className="fa fa-github"/>
            </span>
          </div>
        </div>

        <Next is_valid={is_valid}/>
      </div>
    </div>
  )
}

export default ProfileSlide
