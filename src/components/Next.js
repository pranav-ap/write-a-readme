import React from 'react'
import { useStoreActions } from 'easy-peasy'

import Styles from './styles/Next.module.scss'

const Next = ({ is_valid }) => {
  const next_slide = useStoreActions(actions => actions.ui.next_slide)

  return (
    <div className={Styles.Next}>
      <a
        className="button is-primary is-medium is-rounded"
        id={Styles.NextButton}
        href={``}
        onClick={() => {
          if (is_valid()) {
            next_slide()
          } else {
            console.log('not valid')
          }
        }}>Next</a>
    </div>
  )
}

export default Next
