import React from 'react'

import Title from './components/Title'
import Next from '../Next'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/BuiltWithSlide.module.scss'

const is_valid = () => {
  return true
}

const add_tag = (tool) => {
  const tag = (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-primary is-medium">{tool}</span>
        <a className="tag is-delete is-medium"/>
      </div>
    </div>
  )

  console.log(tag)
}

const on_add_tool = () => {
  const tool = document.getElementById('tool').value

  if (tool.length) {
    add_tag(tool)
  }
}

const BuiltWithSlide = () => {
  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.BuiltWithSlide}>
      <div className="column">
        <Title title={'What tools did you use?'}/>

        <div className={`field is-grouped is-grouped-multiline ${Styles.Collection}`} id={`Collection`}>

        </div>

        <div className="field has-addons" id={Styles.Input}>
          <div className="control is-expanded">
            <input id={'tool'} className="input is-large is-rounded" type="text" placeholder="Enter the Tool"/>
          </div>
          <div className="control">
            <button
              className="button is-info is-large is-rounded"
              onClick={on_add_tool}>Add
            </button>
          </div>
        </div>

        <Next is_valid={is_valid}/>
      </div>
    </div>
  )
}

export default BuiltWithSlide
