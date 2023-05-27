import styled from 'styled-components'
import cardBgImg from 'images/card-bg.png';

const cardHeight = "255px"
const cardWidth = "180px"

const statisticWidthWrapper = '100px'
const statisticH = '140px'


export const ItemWrapper = styled.div`
  position: relative;
  width: ${props => props.statisticPage && props.containerSize === '768px' ? statisticWidthWrapper  : cardWidth};
  height: ${props => props.statisticPage  && props.containerSize === '768px' ? statisticH : cardHeight};
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

  width: ${props => (props.statisticPage && props.containerSize === '768px') ? "80px" : "140px" } ;
  height: ${props => (props.statisticPage && props.containerSize === '768px') ? "125px" : "215px" } ;

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
  font-size:${props => (props.statisticPage && props.containerSize === '768px') ? '20px' : "25px"}  ;
  font-family: 'Luckiest Guy';
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -2px 0 #212121, 0px -2px 0 #212121, 0px 2px 0 #212121,
    0px 2px 0 #212121, -2px 0px 0 #212121, 2px 0px 0 #212121, -2px 0px 0 #212121,
    2px 0px 0 #212121, -2px -2px 0 #212121, 2px -2px 0 #212121;
`;
