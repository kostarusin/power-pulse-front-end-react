import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://power-pulse-fx29.onrender.com/api/exercises';

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchExercises = createAsyncThunk(
  'exercises/allExercises',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      // setAuthHeader(persistedToken);
      const res = await axios.get(`${baseUrl}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
