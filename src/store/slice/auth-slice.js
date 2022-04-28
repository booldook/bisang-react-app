import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

/* initial */
const name = 'auth';

const initialState = {
  isLogging: false,
  user: {
    idx: '',
    userid: '',
    username: '',
    email: '',
    grade: '',
  },
  token: '',
  refreshToken: '',
}

/* async action */
export const logIn = createAsyncThunk(`${name}/logIn`, async ({ userid, userpw }, thunkApi) => {
  try {
    const url = process.env.REACT_APP_SERVER_URL;
    const data = { userid, userpw }
    const options = { withCredentials: true }
    const result = await axios.post(url, data, options);
    console.log(result);
    return result;
  }
  catch(err) {
    return thunkApi.rejectWithValue(err.response.data);
  }
})


/* sync reducer */
const reducers = {
  resetAuth(state, action) {
    Object.assign(state, initialState);
  },
  logOut(state, action) {
    Object.assign(state, initialState);
  }
}


/* extraReducer */
const extraReducers = builder => builder
.addCase(logIn.pending, (state, action) => {

})
.addCase(logIn.fulfilled, (state, action) => {
  state.user = action.payload;
})
.addCase(logIn.rejected, (state, action) => {
  
})


/* createSlice */
const authSlice = createSlice({ name, initialState, reducers, extraReducers });


/* user Getter */



/* export */
export const { resetAuth, logOut } = authSlice.actions
export default authSlice;



