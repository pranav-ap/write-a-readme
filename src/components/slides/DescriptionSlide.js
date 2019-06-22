import React from 'react'
import { useStoreActions } from 'easy-peasy'

import Title from './components/Title'
import Next from '../Next'

import Styles from './styles/DescriptionSlide.module.scss'
import BaseStyles from './styles/Slide.module.scss'

const DescriptionSlide = () => {
  const set_content = useStoreActions(actions => actions.description.set_content)

  return (
    <div className={`columns ${BaseStyles.Slide}`} id={Styles.DescriptionSlide}>
      <div className="column">
        <Title title={'Describe the purpose of your project'}/>
        <textarea id={'description-area'} className="textarea is-medium" placeholder="Write Here!" rows={5}/>
        <Next is_valid={() => {
          const description = document.getElementById('description-area').value

          if (description.length) {
            set_content(description)
            return true
          }

          return false
        }}/>
      </div>
    </div>
  )
}

export default DescriptionSlide
