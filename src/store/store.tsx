import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storyIdsReducer from './slices/storyIdsSlice'
import storyReducer from './slices/storySlice'
import storiesReduser from './slices/storiesSlice'

const rootReducer = combineReducers({
  storyIds: storyIdsReducer,
  story: storyReducer,
  stories: storiesReduser
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
