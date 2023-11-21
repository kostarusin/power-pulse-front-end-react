import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './operations';

const initialState = {
  statistics: {},
};

const statisticsSlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStatistics.fulfilled, (state, { payload }) => {
      state.statistics = payload;
    });
  },
});

export const statisticsReducer = statisticsSlice.reducer;
