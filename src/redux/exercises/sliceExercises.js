import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBodyParts,
  fetchEquipment,
  fetchExercises,
  fetchMuscules,
} from './operationsExercises';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('state.items', state.items);
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: [],
    bodyParts: [],
    muscules: [],
    equipment: [],
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
      .addCase(fetchBodyParts.pending, handlePending)
      .addCase(fetchBodyParts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.bodyParts = action.payload;
      })
      .addCase(fetchBodyParts.rejected, handleRejected)
      .addCase(fetchMuscules.pending, handlePending)
      .addCase(fetchMuscules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.muscules = action.payload;
      })
      .addCase(fetchMuscules.rejected, handleRejected)
      .addCase(fetchEquipment.pending, handlePending)
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.equipment = action.payload;
      })
      .addCase(fetchEquipment.rejected, handleRejected),
    });

export const exercisesReducer = exercisesSlice.reducer;
