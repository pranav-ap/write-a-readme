import React from 'react'
import { useStoreActions } from 'easy-peasy'

import Styles from './styles/Next.module.scss'

const Next = () => {
  const next_slide = useStoreActions(actions => actions.ui.next_slide)

  return (
    <div className="columns" id={Styles.Next}>
      <div className="column">
        <a
          className="button is-primary is-medium"
          id={Styles.NextButton}
          onClick={() => next_slide()}>Next</a>
      </div>
    </div>
  )
}

export default Next
