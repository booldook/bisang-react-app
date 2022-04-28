import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import globalSlice from "./slice/global-slice";
import authSlice from "./slice/auth-slice";
import bookSlice from "./slice/book-slice";
import postSlice from "./slice/post-slice";

import middleware from "./middleware";

const reducer = combineReducers({
  global: globalSlice.reducer,
  auth: authSlice.reducer,
  book: bookSlice.reducer,
  post: postSlice.reducer,
});

export default configureStore({
  reducer,
  middleware: [thunk, logger, ...middleware],
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger, ...middleware),
  devTools: process.env.NODE_ENV !== 'production'
})