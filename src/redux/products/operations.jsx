import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/allProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/api/products/byGroupBlood`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchProductCategories = createAsyncThunk(
  'products/productCategory',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/api/products`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);