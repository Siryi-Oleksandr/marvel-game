import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from './operations';

const initialState = {
  cards: [],
  isRefreshing: false,
};
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: {
    [fetchCards.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCards.fulfilled](state, action) {
      state.cards = action.payload;
      state.isRefreshing = false;
    },
    [fetchCards.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const selectCards = state => state.cards;
