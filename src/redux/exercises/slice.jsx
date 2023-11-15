import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises, fetchByType } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: [],
    bodyParts:[],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchExercises.pending, handlePending)
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload;
      })
      .addCase(fetchExercises.rejected, handleRejected)

      .addCase(fetchByType.pending, handlePending)
      .addCase(fetchByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.bodyParts = action.payload;
      })
      .addCase(fetchByType.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;
