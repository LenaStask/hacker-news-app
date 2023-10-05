import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storyIdsReducer from './slices/storyIdsSlice'
import storyReducer from './slices/storySlice'
import storiesReducer from './slices/storiesSlice'
import commentsReducser from './slices/commentSlice'

const rootReducer = combineReducers({
  storyIds: storyIdsReducer,
  story: storyReducer,
  stories: storiesReducer,
  comments: commentsReducser
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
