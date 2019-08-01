import React from 'react'
import { useStoreState } from 'easy-peasy'
import { saveAs } from 'file-saver'

import Download from './../../../assets/download.svg'

import BaseStyles from './styles/Slide.module.scss'
import Styles from './styles/DownloadSlide.module.scss'

const DownloadSlide = () => {
  const repo = useStoreState(state => state.profile.repo)
  const license = useStoreState(state => state.license.type)
  const description = useStoreState(state => state.description.content)
  const dev_setup = useStoreState(state => state.dev_setup.content)
  const tools = useStoreState(state => state.built_with.tools)

  const click_download = () => {
    const blob = new Blob([
      '# ', repo, '\n\n',
      description, '\n\n',

      '## Development Setup', '\n\n',
      dev_setup, '\n\n',

      '## Built With', '\n\n',
      ...tools.map(tool => `- ${tool} \n`), '\n',

      '## License', '\n\n',
      'This project in under the ', license, ' license.',
    ], {
      type: 'text/markdown;charset=utf-8',
    })

    saveAs(blob, 'README.md')
  }

  return (
    <div id={Styles.DownloadSlide} className={BaseStyles.Slide}>
      <Download id={Styles.DownloadPicture}/>

      <div className="field is-grouped" id={Styles.ButtonGroup}>
        <p className="control">
          <button className={`button is-medium is-primary is-outlined ${Styles.Button}`}>Preview</button>
        </p>
        <p className="control">
          <button
            className={`button is-medium is-info ${Styles.Button}`}
            onClick={() => click_download()}>Download
          </button>
        </p>
      </div>
    </div>
  )
}


export default DownloadSlide
