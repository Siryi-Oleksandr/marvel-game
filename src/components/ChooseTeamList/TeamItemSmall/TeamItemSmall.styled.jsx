import styled from 'styled-components'
import cardBgImg from '../../../images/card-bg.png';

const cardHeight = "255px" // todo move to chakra
const cardWidth = "180px"
export const ItemWrapper = styled.div`
  position: relative;
  width: ${cardWidth};
  height: ${cardHeight};
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${cardBgImg});
  background-size: cover;
  background-position: center;

  color: red;
`;

export const Card = styled.div`
  position: absolute;
  width: 140px;
  height: 215px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;

`;

export const HeroNameSmall = styled.h2`
  color: red;
  text-align: center;
  font-size: 24px;
  font-family: 'Luckiest Guy';
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -2px 0 #212121, 0px -2px 0 #212121, 0px 2px 0 #212121,
    0px 2px 0 #212121, -2px 0px 0 #212121, 2px 0px 0 #212121, -2px 0px 0 #212121,
    2px 0px 0 #212121, -2px -2px 0 #212121, 2px -2px 0 #212121;
`;
