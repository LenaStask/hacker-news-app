import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type IStory from '../../interfaces/IStory'
import hackerNews from '../../api/hackerNews'

interface IStorierState {
  story: IStory[]
  loading: boolean
}

export const getStories = createAsyncThunk<IStory[], undefined>(
  'story/get',
  async () => {
    const ids = await hackerNews.getStoryIds()
    const stories = []
    for (let i = 0; i < 100; i++) {
      const a = await hackerNews.getStory(ids[i])
      stories.push(a)
    }
    console.log(stories)
    return stories
  }
)

const initialState: IStorierState = {
  story: [],
  loading: false
}

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStories.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getStories.fulfilled, (state, action) => {
      state.story = action.payload
      state.loading = false
    })
  }
})

export default storiesSlice.reducer
