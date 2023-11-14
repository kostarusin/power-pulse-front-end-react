import { createSlice } from '@reduxjs/toolkit';
import { getDiary } from './operations';

const initialState = {
  consumedProducts: [],
  doneExercises: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDiary.fulfilled, (state, { payload }) => {
      state.consumedProducts = payload.consumedProducts;
      state.doneExercises = payload.doneExercises;
    });
  },
});

export const diaryReducer = diarySlice.reducer;
