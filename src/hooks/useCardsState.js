import { useSelector } from 'react-redux';
import {
  selectCards,
  selectUserTeam,
  selectUserTeamTitle,
  getFilteredCards,
} from 'redux/cards/selectors';
import { selectStatistics } from 'redux/statistics/selectors';

export const useCardsState = () => {
  const cards = useSelector(selectCards);
  const userTeam = useSelector(selectUserTeam);
  const userTeamTitle = useSelector(selectUserTeamTitle);
  const filteredCards = useSelector(getFilteredCards);
  const statistics = useSelector(selectStatistics);

  return {
    cards,
    userTeam,
    userTeamTitle,
    filteredCards,
    statistics,
  };
};
