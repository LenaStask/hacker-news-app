import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type IComment from "../../interfaces/IComment";
import hackerNews from "../../api/hackerNews";

interface ICommentState {
  comments: IComment[];
  loading: boolean;
}

export const getComments = createAsyncThunk<IComment[], number[]>(
  "comments/get",
  async (ids: number[]) => {
    const comments = [];
    for (let i = 0; i < ids.length; i++) {
      const comment = await hackerNews.getComment(ids[i]);
      comments.push(comment);
    }
    return comments;
  }
);

const initialState: ICommentState = {
  comments: [],
  loading: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = [...state.comments, ...action.payload];
      state.loading = false;
    });
  },
});

export default commentSlice.reducer;
