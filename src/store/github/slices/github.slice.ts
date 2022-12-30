import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAVOURITE_KEY = 'rfk'

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  // getting data from localstorage and in case no data we will get an empty array
  favourites: JSON.parse(localStorage.getItem(LS_FAVOURITE_KEY) ?? '[]'),
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_FAVOURITE_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(f => f !== action.payload)
      localStorage.setItem(LS_FAVOURITE_KEY, JSON.stringify(state.favourites))
    },
  },
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
