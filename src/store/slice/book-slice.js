import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { retrieveBookApi } from "store/api/book-api";

/* initial */
const name = 'book';

const initialState = {
  query: '',
  isEnd: false,
  totalCount: 0,
  books: [],
  err: ''
}

/* async action */
export const retrieveBook = createAsyncThunk(`${name}/retrieveBook`, async (data, thunkApi) => {
  try {
    const { data: { documents, meta } } = await retrieveBookApi(data);
    return { documents, meta };
  }
  catch(err) {
    return thunkApi.rejectWithValue(err.response.data);
  }
})


/* reducer */
const reducers = {
  resetBook(state, action) {
    // state = {...initialState}; // books x 
    Object.assign(state, initialState);
  }
}


/* extraReducer */


/* createSlice */
const bookSlice = createSlice({ initialState });


/* user Getter */


/* export */




