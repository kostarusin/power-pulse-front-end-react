import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://power-pulse-back-end.onrender.com';



export const fetchExercises = createAsyncThunk(
  'exercises/fetchExercises',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/exercises');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchBodyParts = createAsyncThunk(
  'exercises/fetchBodyParts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/exercises/bodyparts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchMuscules = createAsyncThunk(
  'exercises/fetchMuscules',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/muscules');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchEquipment = createAsyncThunk(
  'exercises/fetchEquipment',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/equipments');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



