import { createSlice } from '@reduxjs/toolkit';
import { getDiary, deleteExerciseOrProduct } from './operations';

const initialState = {
  isLoading: false,
  consumedProducts: [],
  doneExercises: [],
  burnedCalories: null,
  consumedCalories: null,
  efficiency: {
    time: null,
    burnedCalories: null,
  },
  date: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDiary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDiary.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.consumedProducts = payload.consumedProducts;
        state.doneExercises = payload.doneExercises;
        state.burnedCalories = payload.burnedCalories;
        state.consumedCalories = payload.consumedCalories;
        state.date = payload.date;
      })
      .addCase(getDiary.rejected, (state) => {
        state.isLoading = false;
        state.consumedProducts = [];
        state.doneExercises = [];
        state.burnedCalories = null;
        state.consumedCalories = null;
        state.date = null;
      })
      .addCase(deleteExerciseOrProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteExerciseOrProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.consumedProducts = payload.consumedProducts;
        state.doneExercises = payload.doneExercises;
        state.burnedCalories = payload.burnedCalories;
        state.consumedCalories = payload.consumedCalories;
      })
      .addCase(deleteExerciseOrProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const diaryReducer = diarySlice.reducer;
