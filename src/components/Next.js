import React from 'react'
import Styles from './styles/Next.module.scss'

const Next = () => {
  return (
    <div className="columns" id={Styles.Next}>
      <div className="column">
        <a className="button is-primary is-medium" id={Styles.NextButton}>Next</a>
      </div>
    </div>
  )
}

export default Next
