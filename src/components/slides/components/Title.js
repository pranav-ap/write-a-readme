import React from 'react'

import Styles from './styles/Title.module.scss'

const Title = ({ title }) => {
  return (
    <h1 className={`${Styles.Title} is-size-3`}>{title}</h1>
  )
}

export default Title
