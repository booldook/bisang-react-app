import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { retrieveBookApi } from "store/api/book-api";

/* initial */
const name = 'book';

const initialState = {
  isLoading: false,
  query: '',
  isEnd: false,
  totalCount: 0,
  books: [],
  err: null
}

/* async action */
export const retrieveBook = createAsyncThunk(`${name}/retrieveBook`, async (data, thunkApi) => {
  try {
    const { data: { documents, meta } } = await retrieveBookApi(data);
    return { books: documents, isEnd: meta.is_end, totalCount: meta.total_count };
  }
  catch(err) {
    return thunkApi.rejectWithValue(err.response.data);
  }
})


/* sync reducer */
const reducers = {
  resetBook(state, action) {
    // state = {...initialState}; // books x 
    Object.assign(state, initialState);
  },
  setQuery(state, action) {
    state.query = action.payload;
  }
}


/* extraReducer */
const extraReducers = builder => builder
.addCase(retrieveBook.pending, (state, action) => {
  state.isLoading = true;
})
.addCase(retrieveBook.fulfilled, (state, action) => {
  state.isLoading = false;
  state.books = action.payload.books;
  state.isEnd = action.payload.isEnd;
  state.totalCount = action.payload.totalCount;
})
.addCase(retrieveBook.rejected, (state, action) => {
  state.isLoading = false;
  state.err = action.payload;
})


/* createSlice */
const bookSlice = createSlice({ name, initialState, reducers, extraReducers });


/* user Getter */



/* export */
export const { resetBook, setQuery } = bookSlice.actions
export default bookSlice;



