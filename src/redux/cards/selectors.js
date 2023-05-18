// import { createSelector } from '@reduxjs/toolkit';

export const selectCards = state => state.cards.cards;
export const selectUserTeam = state => state.cards.userTeam;
export const selectFilter = state => state.cards.filter;

// export const getFilteredCards = createSelector(
//   [getCards, getFilter],
//   (cards, filters) => {
//     const filteredCards = cards.reduce();
//     return filteredCards;
//   }
// );
