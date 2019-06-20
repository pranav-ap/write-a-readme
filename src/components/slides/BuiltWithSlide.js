import React from 'react'

import Next from '../Next'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/BuiltWithSlide.module.scss'
import Title from './components/Title'

const BuiltWithSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.BuiltWithSlide}>
      <div className="column">
        <Title title={'What tools did you use?'}/>

        <div id={Styles.Collection}>
          <i className="devicon-babel-plain colored"></i>

          <i className="devicon-react-original-wordmark colored"></i>

          <i className="devicon-sass-original colored"></i>

          <i className="devicon-express-original-wordmark colored"></i>

          <i className="devicon-javascript-plain colored"></i>

          <i className="devicon-mocha-plain colored"></i>

          <i className="devicon-mongodb-plain-wordmark colored"></i>


        </div>

        <Next/>
      </div>
    </div>
  )
}

export default BuiltWithSlide
