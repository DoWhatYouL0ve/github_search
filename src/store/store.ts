import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { githubApi } from './github/api/github.api'
import { githubReducer } from './github/slices/github.slice'

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  // adding middleware from githubApi to let app work correctly
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware),
})

// for working refetchOnFocus
setupListeners(store.dispatch)

export type RootStateType = ReturnType<typeof store.getState>
