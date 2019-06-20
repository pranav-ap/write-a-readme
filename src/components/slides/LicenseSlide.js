import React from 'react'

import Next from '../Next'

import Styles from './styles/LicenseSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  const license = document.getElementById('')
  return true
}

const LicenseSlide = () => {
  const licenses = ['MIT', 'ISC', 'Apache']

  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.LicenseSlide}>
      <div className="column">
        <h1 className={`is-size-2 ${BaseStyles.title}`}>What license are you using?</h1>

        <div className="control">
          <label className="radio">
            <input type="radio" name="foobar"/>
            Foo
          </label>
          <label className="radio">
            <input type="radio" name="foobar"/>
            Bar
          </label>
        </div>

        <Next is_valid={() => is_valid()}/>
      </div>
    </div>
  )
}

export default LicenseSlide
