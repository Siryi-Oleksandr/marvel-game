import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from './operations';

const initialState = {
  cards: [],
  userTeam: [],
  isRefreshing: false,
};
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCardToTeam(state, action) {
      state.userTeam.push(action.payload);
    },
    deleteCardFromTeam(state, action) {
      const index = state.userTeam.findIndex(card => card.id === action.id);
      console.log('index', index);
      state.userTeam.splice(index, 1);

      // return state.userTeam.filter(card => card.id !== action.payload);
    },
  },
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
export const { addCardToTeam, deleteCardFromTeam } = cardsSlice.actions;
