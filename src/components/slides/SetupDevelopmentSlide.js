import React from 'react'
import { useStoreActions } from 'easy-peasy'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/SetupDevelopmentSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const SetupDevelopmentSlide = () => {
  const set_content = useStoreActions(actions => actions.dev_setup.set_content)

  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.SetupDevelopmentSlide}>
      <div className="column">
        <Title title={'Setup for Local Development'}/>
        <textarea id={'dev-setup-area'} className="textarea is-medium" placeholder="Write Here!" rows={5}/>
        <Next is_valid={() => {
          const dev_setup = document.getElementById('dev-setup-area').value

          if (dev_setup.length) {
            set_content(dev_setup)
            return true
          }

          return false
        }}/>
      </div>
    </div>
  )
}

export default SetupDevelopmentSlide
