import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import apiReducer from "./apiSlice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    posts: apiReducer,  // ← THIS KEY IS IMPORTANT
  },
});
