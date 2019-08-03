import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import store from './../../store/store'

import Title from './components/Title'
import Next from '../Next'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/BuiltWithSlide.module.scss'

const is_valid = () => {
  return true
}

const add_tag = (tool, key, remove_tool) => {
  return (
    <div className="control" key={key}>
      <div className="tags has-addons">
        <span className="tag is-info is-medium">{tool}</span>
        <a
          className="tag is-delete is-medium"
          href={''}
          type="button"
          onClick={(e) => {
            e.preventDefault()
            remove_tool(tool)
          }}/>
      </div>
    </div>
  )
}

const Collection = () => {
  const tools = useStoreState(state => state.built_with.tools)
  const remove_tool = store.getActions().built_with.remove_tool

  return (
    <div className={`field is-grouped is-grouped-multiline ${Styles.Collection}`} id={`Collection`}>
      {
        tools.map((tool, key) => add_tag(tool, key, remove_tool))
      }
    </div>
  )
}

const BuiltWithSlide = () => {
  const add_tool = useStoreActions(actions => actions.built_with.add_tool)

  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.BuiltWithSlide}>
      <div className="column">
        <Title title={'What tools did you use?'}/>

        <div className="field has-addons" id={Styles.Input}>
          <div className="control is-expanded">
            <input id={'tool'} className="input is-large is-rounded" type="text" placeholder="Enter the Tool"/>
          </div>
          <div className="control">
            <button
              className="button is-info is-large is-rounded"
              onClick={() => {
                const tool = document.getElementById('tool').value

                if (tool.length) {
                  add_tool(tool)
                  document.getElementById('tool').value = ''
                }
              }}>Add
            </button>
          </div>
        </div>

        <Collection/>

        <Next is_valid={is_valid}/>
      </div>
    </div>
  )
}

export default BuiltWithSlide
