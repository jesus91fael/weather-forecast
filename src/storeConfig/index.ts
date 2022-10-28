import { configureStore } from '@reduxjs/toolkit'

// Import books reducer:
import weatherReducer from './store'

// Create Redux store:
export const store = configureStore({
  reducer: {
    weatherReducer // Add books reducer
  }
})