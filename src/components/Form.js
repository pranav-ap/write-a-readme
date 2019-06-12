import React, { Component } from 'react'

import InputBar from './InputBar'
import Dropdown from './Dropdown'
import Textarea from './Textarea'
import NumberedList from './NumberedList'

import Styles from './styles/Form.module.scss'


const get_repo = () => {
  return (
    <div className={Styles.group}>
      <InputBar label={'Username'} placeholder={'Username'}/>
      <InputBar label={'Project Name'} placeholder={'Project Name'}/>
    </div>
  )
}

const what_license = () => {
  return (
    <div className={Styles.group}>
      <Dropdown label={'License'} options={['MIT', 'ISC', 'GPL']}/>
    </div>
  )
}

const get_shield = (name, value, color) => {
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{name}</span>
        <span className="tag is-info">{value}</span>
      </div>
    </div>
  )
}

const get_shields = () => {
  return (
    <div className={Styles.group}>
      <div className="field is-grouped is-grouped-multiline">
        {get_shield('npm', 754)}
      </div>

      <div>
        <InputBar label={'Badge Name'} placeholder={'Badge Name'}/>
        <InputBar label={'Message'} placeholder={'Message'}/>
        <Dropdown label={'Color'} options={['Blue', 'Red', 'Green']}/>
      </div>

      <div>
        <a className="button is-primary">Add Shield</a>
      </div>
    </div>
  )
}

const describe_project = () => {
  return (
    <div className={Styles.group}>
      <h1>Describe the purpose of the project</h1>
      <Textarea id={'project-description'} placeholder={'Hello world'}/>
    </div>
  )
}

const setup_for_development = () => {
  return (
    <div className={Styles.group}>
      <h1>Setup for development</h1>
      <Textarea id={'project-description'} placeholder={'Hello world'}/>
    </div>
  )
}

const built_with = () => {
  return (
    <div className={Styles.group}>
      <NumberedList id={'built-with'} items={['React', 'Gatsby']}/>

      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Find a repository"/>
        </div>
        <div className="control">
          <a className="button is-info">Search</a>
        </div>
      </div>
    </div>
  )
}

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: {
        license: {
          type: '',
          path: '',
        },
        shields: [],
        project_description: '',
        built_with: [],
      }
    }
  }

  render() {
    return (
      <div id={Styles.Form}>
        {get_repo()}
        {what_license()}
        {get_shields()}
        {describe_project()}
        {setup_for_development()}
        {built_with()}
        <div>
          <a className="button is-medium is-primary">Generate README.md</a>
        </div>
      </div>
    )
  }
}

export default Form
