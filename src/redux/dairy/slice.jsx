import { createSlice } from '@reduxjs/toolkit';
import { getDiary, deleteExerciseOrProduct } from './operations';

const initialState = {
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
      .addCase(getDiary.fulfilled, (state, { payload }) => {
        state.consumedProducts = payload.consumedProducts;
        state.doneExercises = payload.doneExercises;
        state.burnedCalories = payload.burnedCalories;
        state.consumedCalories = payload.consumedCalories;

        state.date = payload.date;
           })
      .addCase(getDiary.rejected, (state) => {
        state.consumedProducts = [];
        state.doneExercises = [];
        state.burnedCalories = null;
        state.consumedCalories = null;
        state.date = null;
      })
      .addCase(deleteExerciseOrProduct.fulfilled, (state, { payload }) => {
        state.consumedProducts = payload.consumedProducts;
        state.doneExercises = payload.doneExercises;
        state.burnedCalories = payload.burnedCalories;
        state.consumedCalories = payload.consumedCalories;
      });
  },
});

export const diaryReducer = diarySlice.reducer;
