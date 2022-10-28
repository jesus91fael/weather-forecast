import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weather: ['teste', 'teste']
}

const libraryWeather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeather: (state, action) => {
      state.weather = [state.weather, action.payload]
    }
  }
})

export const { addWeather } = libraryWeather.actions

export default libraryWeather.reducer
