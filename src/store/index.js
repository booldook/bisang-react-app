import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage/session'; // sessionStorage
// import storage from 'redux-persist/lib/storage/'; // localStorage

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

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['book', 'post', 'auth', 'global'],
  blacklist: ['global'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger, ...middleware],
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger, ...middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

