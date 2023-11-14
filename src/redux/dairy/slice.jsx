import { createSlice } from '@reduxjs/toolkit';
import { getDiary } from './operations';

const initialState = {
  consumedProducts: [],
  doneExercises: [],
  burnedCalories: null,
  consumedCalories: null,
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
      })
      .addCase(getDiary.rejected, (state) => {
        state.consumedProducts = {};
        state.doneExercises = {};
        state.burnedCalories = null;
        state.consumedCalories = null;
      });
  },
});

export const diaryReducer = diarySlice.reducer;
