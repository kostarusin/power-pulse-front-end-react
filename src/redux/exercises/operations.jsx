import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://power-pulse-fx29.onrender.com/api/exercises';

export const fetchExercises = createAsyncThunk(
  'exercises/allExercises',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
