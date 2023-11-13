import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExercises = createAsyncThunk(
  'exercises/allExercises',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/api/exercises/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
