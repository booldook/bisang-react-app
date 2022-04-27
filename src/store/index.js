import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import bookSlice from "./slice/book-slice";
import postSlice from "./slice/post-slice";

export default configureStore({
  reducer: {
    book: bookSlice.reducer,
    post: postSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
   return getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== 'production' ? logger : [])
  },
  devTools: process.env.NODE_ENV !== 'production'
})