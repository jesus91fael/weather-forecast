import React from 'react'
import { Provider } from 'react-redux'
import { store } from './storeConfig'
import BRoutes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BRoutes />
    </Provider>
  )
}

export default App
