import React, { Fragment } from 'react'

const InputBar = ({ label, placeholder }) => {
  return (
    <Fragment>
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={placeholder}/>
      </div>
    </Fragment>
  )
}

export default InputBar
