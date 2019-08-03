import React from 'react'
import { useStoreActions } from 'easy-peasy'

import Styles from './styles/Next.module.scss'

const Next = ({ is_valid }) => {
  const next_slide = useStoreActions(actions => actions.ui.next_slide)

  return (
    <div className={Styles.Next}>
      <button
        className="button is-primary is-medium is-rounded"
        type="button"
        id={Styles.NextButton}
        href={``}
        onClick={(e) => {
          e.preventDefault()

          if (is_valid()) {
            next_slide()
          } else {
            console.log('not valid')
          }
        }}>Next
      </button>
    </div>
  )
}

export default Next
