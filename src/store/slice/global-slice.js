import { createSlice } from "@reduxjs/toolkit";

/* initial */
const name = 'global';

const initialState = {
  isLoading: false,
  error: null,
}

/* sync reducer */
const reducers = {
  setGlobalReset(state, action) {
    Object.assign(state, initialState);
  },
  setGlobalIsLoading(state, action) {
    state.isLoading = action.payload;
  },
  setGlobalError(state, action) {
    state.error = action.payload;
  }
}

/* createSlice */
const globalSlice = createSlice({ name, initialState, reducers });

/* export */
export const { setGlobalReset, setGlobalIsLoading, setGlobalError } = globalSlice.actions
export default globalSlice;



