import { createSelector } from '@reduxjs/toolkit';

export const selectCards = state => state.cards.cards;
export const selectUserTeam = state => state.cards.userTeam;
export const selectUserTeamTitle = state => state.cards.userTeamTitle;
export const selectStatistics = state => state.cards.statistics;

export const getFilteredCards = createSelector(
  [selectCards, selectUserTeam],
  (cards, currentTeam) => {
    const filters = currentTeam.map(card => card.type);
    const filteredCards = cards.filter(card => !filters.includes(card.type));
    return filteredCards || [];
  }
);
