import { createSlice } from '@reduxjs/toolkit';
import { getDiary } from './operations';

const initialState = {
  products: [],
  exercises: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDiary.fulfilled, (state, action) => {
      state.user = action.payload.doneExercises;
      state.user = action.payload.consumedProducts;
    });
  },
});

export const authReducer = authSlice.reducer;
