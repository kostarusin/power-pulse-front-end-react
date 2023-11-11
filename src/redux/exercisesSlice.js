import { createSlice } from '@reduxjs/toolkit';

// import {

//   } from './operations';

const initialState = {
  isLoading: false,
//   isExerciseModalOpen
//   isSuccessModalOpen
  error: null,
  exercises: [],
};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    extraReducers: builder =>
      builder
        
  });
  
  export const exercisesReducer = exercisesSlice.reducer;