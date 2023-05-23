import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statistics: [],
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setFightStatistics(state, action) {
      state.statistics.push(action.payload);
    },
  },
});

export const { setFightStatistics } = statisticsSlice.actions;
