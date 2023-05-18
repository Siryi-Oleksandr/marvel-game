import { useSelector } from 'react-redux';
import {
  selectCards,
  selectUserTeam,
  selectFilter,
} from 'redux/cards/selectors';

export const useCardsState = () => {
  const cards = useSelector(selectCards);
  const userTeam = useSelector(selectUserTeam);
  const filter = useSelector(selectFilter);

  return {
    cards,
    userTeam,
    filter,
  };
};
