import React from 'react'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/LicenseSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const is_valid = () => {
  const license = document.querySelector('input[name="license"]:checked').id
  return license !== ''
}

const get_options = () => {
  const licenses = ['MIT', 'ISC', 'Apache']

  return (
    licenses.map(license => {
      return (
        <div className={Styles.Option} key={license}>
          <input className="is-checkradio" id={license} type="radio" name='license'/>
          <label htmlFor={license}>{license}</label>
        </div>
      )
    })
  )
}

const LicenseSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.LicenseSlide}>
      <div className="column">
        <Title title={'What license are you using?'}/>

        <div className="field">
          {get_options()}
        </div>

        <Next is_valid={() => is_valid()}/>
      </div>
    </div>
  )
}

export default LicenseSlide
