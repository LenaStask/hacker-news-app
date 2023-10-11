import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type IStory from '../../interfaces/IStory'
import hackerNews from '../../api/hackerNews'

interface IStoryState {
  story: IStory|null
}

export const getStory = createAsyncThunk<IStory, number>(
  'story/get',
  async (id) => {
    return await hackerNews.getStory(id)
  }
)

const initialState: IStoryState = {
  story: null
}

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStory.fulfilled, (state, action) => {
      state.story = action.payload
    })
  }

})

export default storySlice.reducer
