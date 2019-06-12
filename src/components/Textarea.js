import React from 'react'

const Textarea = ({ id, placeholder }) => {
  return (
    <textarea id={id} className="textarea" placeholder={placeholder}/>
  )
}

export default Textarea
