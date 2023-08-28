import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storyIdsReducer from './slices/storyIdsSlice'
import storyReducer from './slices/storySlice'

const rootReducer = combineReducers({
  storyIds: storyIdsReducer,
  story: storyReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
