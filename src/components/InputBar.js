import React from 'react'

const InputBar = ({ label, placeholder }) => {
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

export default InputBar
