import React from 'react'

import Download from './../../../assets/download.svg'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/DownloadSlide.module.scss'

const DownloadSlide = () => {
  return (
    <div id={Styles.DownloadSlide} className={BaseStyles.Slide}>
      <Download id={Styles.DownloadPicture}/>

      <div className="field is-grouped" id={Styles.ButtonGroup}>
        <p className="control">
          <a className={`button is-medium is-primary is-outlined ${Styles.Button}`}>Preview</a>
        </p>
        <p className="control">
          <a className={`button is-medium is-link ${Styles.Button}`}>Download</a>
        </p>
      </div>
    </div>
  )
}

export default DownloadSlide