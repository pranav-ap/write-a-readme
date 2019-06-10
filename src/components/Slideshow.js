import React, { Component } from 'react'

import Styles from './styles/Slideshow.module.scss'

const get_repo = () => {
  return (
    <div className={Styles.slide}>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Username</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="Username"/>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Project Name</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="Project Name"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const what_license = () => {
  return (
    <div className={Styles.slide}>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">License</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const get_shields = () => {
  return (
    <div className={Styles.slide}>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">npm</span>
            <span className="tag is-info">0.5.0</span>
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">build</span>
            <span className="tag is-success">passing</span>
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">chat</span>
            <span className="tag is-primary">on gitter</span>
          </div>
        </div>
      </div>

      <div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Badge Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" placeholder="Badge Name"/>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Message</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" placeholder="Message"/>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Color</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a className="button is-primary">Primary</a>
      </div>
    </div>
  )
}

const describe_project = () => {
  return (
    <div className={Styles.slide}>
      <h1>Describe the purpose of the project</h1>
      <textarea className="textarea" placeholder="Hello world"/>
    </div>
  )
}

const setup_for_development = () => {
  return (
    <div className={Styles.slide}>
      <h1>Setup for development</h1>
      <textarea className="textarea" placeholder="Hello world"/>
    </div>
  )
}

const built_with = () => {
  return (
    <div className={Styles.slide}>
      <div className="content">
        <ol type="1">
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby</li>
        </ol>
      </div>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Tool used"/>
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
    </div>
  )
}

class Slideshow extends Component {
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
      <div id={Styles.Slideshow}>
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

export default Slideshow
