import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data.slice(0, 5); // return first 5 posts
  }
);

const apiSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })

      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch posts";
      });
  },
});

export default apiSlice.reducer;
