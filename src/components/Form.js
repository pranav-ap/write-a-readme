import React, { Component } from 'react'

import Styles from './styles/Form.module.scss'


const get_input_bar = (label, placeholder) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input className="input" type="text" placeholder={placeholder}/>
          </p>
        </div>
      </div>
    </div>
  )
}

const get_dropdown = (label, options) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              <select>
                {
                  options.map(option => {
                    return (<option>{option}</option>)
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const get_repo = () => {
  return (
    <div className={Styles.group}>
      {get_input_bar('Username', 'Username')}
      {get_input_bar('Project Name', 'Project Name')}
    </div>
  )
}

const what_license = () => {
  return (
    <div className={Styles.group}>
      {get_dropdown('License', ['MIT', 'ISC', 'GPL'])}
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
        {get_input_bar('Badge Name', 'Badge Name')}
        {get_input_bar('Message', 'Message')}
        {get_dropdown('Color', ['Blue', 'Red', 'Green'])}
      </div>

      <div>
        <a className="button is-primary">Add Shield</a>
      </div>
    </div>
  )
}

const get_textarea = (placeholder) => {
  return (
    <textarea className="textarea" placeholder={placeholder}/>
  )
}

const describe_project = () => {
  return (
    <div className={Styles.group}>
      <h1>Describe the purpose of the project</h1>
      {get_textarea('Hello world')}
    </div>
  )
}

const setup_for_development = () => {
  return (
    <div className={Styles.group}>
      <h1>Setup for development</h1>
      {get_textarea('Hello world')}
    </div>
  )
}

const built_with = () => {
  return (
    <div className={Styles.group}>
      <div className="content">
        <ol type="1" id={'tools-used-list'}>
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby</li>
        </ol>
      </div>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Tool used"/>
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
        project_description: {
          short: '',
          long: '',
        }
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
