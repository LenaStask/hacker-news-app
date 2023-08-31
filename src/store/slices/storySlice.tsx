import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type IStory from '../../interfaces/IStory'
import hackerNews from '../../api/hackerNews'

interface IStoryState {
  story: IStory
}

export const getStory = createAsyncThunk<IStory, number>(
  'story/get',
  async (id) => {
    return await hackerNews.getStory(id)
  }
)

const initialState: IStoryState = {
  story: {
    by: '',
    descendants: 0,
    id: 0,
    kids: [],
    score: 0,
    time: Date.now(),
    title: '',
    type: '',
    url: ''
  }
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
