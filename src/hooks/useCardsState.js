import { useSelector } from 'react-redux';
import {
  selectCards,
  selectUserTeam,
  getFilteredCards,
} from 'redux/cards/selectors';

export const useCardsState = () => {
  const cards = useSelector(selectCards);
  const userTeam = useSelector(selectUserTeam);
  const filteredCards = useSelector(getFilteredCards);

  return {
    cards,
    userTeam,
    filteredCards,
  };
};
