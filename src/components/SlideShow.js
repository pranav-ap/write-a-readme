import React from 'react'
import { useStoreState } from 'easy-peasy'

import ProfileSlide from './slides/ProfileSlide'
import LicenseSlide from './slides/LicenseSlide'
import DescriptionSlide from './slides/DescriptionSlide'
import SetupDevelopmentSlide from './slides/SetupDevelopmentSlide'
import BuiltWithSlide from './slides/BuiltWithSlide'
import DownloadSlide from './slides/DownloadSlide'

import Styles from './styles/SlideShow.module.scss'

const get_slide = (active_slide) => {
  if (active_slide === 0) {
    return <LicenseSlide/>
  } else if (active_slide === 1) {
    return <ProfileSlide/>
  } else if (active_slide === 2) {
    return <DescriptionSlide/>
  } else if (active_slide === 3) {
    return <SetupDevelopmentSlide/>
  } else if (active_slide === 4) {
    return <BuiltWithSlide/>
  } else {
    return <DownloadSlide/>
  }
}

const SlideShow = () => {
  const active_slide = useStoreState(state => state.ui.active_slide)

  return (
    <div className="columns" id={Styles.SlideShow}>
      <div className="column">
        {get_slide(active_slide)}
      </div>
    </div>
  )
}

export default SlideShow
