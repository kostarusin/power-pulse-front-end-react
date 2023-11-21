import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStatistics = createAsyncThunk(
  'statisrics/getStatistics',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/api/statistics`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
