import React from 'react'
import { StoreProvider } from 'easy-peasy'

import store from './src/store/store'

export default ({ element }) => {
  return (
    <StoreProvider store={store}>
      {element}
    </StoreProvider>
  )
}
