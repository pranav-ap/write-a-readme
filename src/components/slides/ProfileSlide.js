import React from 'react'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/ProfileSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'
import { useStoreActions } from 'easy-peasy'

const ProfileSlide = () => {
  const set_profile = useStoreActions(actions => actions.profile.set_profile)

  return (
    <div className={`columns ${BaseStyles.Slide}`}>
      <div className="column">
        <Title title={'What\'s your project name ?'}/>

        <div className="field">
          <div className={`control has-icons-left ${Styles.Input}`}>
            <input id={'project-name'} className="input is-large is-rounded" type="text" placeholder="Project Name"/>
            <span className="icon is-small is-left">
              <i className={`fa fa-github`}/>
            </span>
          </div>
        </div>

        <Next is_valid={() => {
          const project_name = document.getElementById('project-name').value

          if (project_name.length) {
            set_profile(project_name)
            return true
          }

          return false
        }}/>
      </div>
    </div>
  )
}

export default ProfileSlide
