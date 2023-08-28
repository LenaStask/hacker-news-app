import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import hackerNews from '../../api/hackerNews'

export const getStoryIds = createAsyncThunk<number[], undefined>(
  'StoryIds/get',
  async () => await hackerNews.getStoryIds()
)
export interface initialStateType {
  ids: number[]
}
const initialState: initialStateType = {
  ids: []
}
const storyIdsSlice = createSlice({
  name: 'storyIds',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStoryIds.fulfilled, (state, action) => {
      state.ids = action.payload
    })
  }

})

export default storyIdsSlice.reducer
