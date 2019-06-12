import React from 'react'

const Dropdown = ({ label, options }) => {
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
                  options.map((option, index) => {
                    return (<option key={index}>{option}</option>)
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

export default Dropdown
