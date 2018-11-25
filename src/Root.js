import React from 'react'
import { Provider } from './Provider'
import App from './container/App'

const Root = () => (
  <Provider>
    <App />
  </Provider>
)

export default Root
