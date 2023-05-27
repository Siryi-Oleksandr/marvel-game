import styled from 'styled-components';

const cardHeight = '255px';
const cardWidth = '180px';

export const ListWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 20px auto 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 30px;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const TeamItemCommand = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(${cardWidth} * 3 + 20);
  height: calc(${cardHeight}+ 15% + 60);
  padding-bottom: 10px;

  & > div > :nth-child(1) {
    transition: 0.8s;
    transform: translateX(calc(${cardWidth} * 3 - 230%)) translateY(-5%)
      rotateZ(-15deg);
    transition-delay: 0s;
    background-color: red;
    color: white;
  }
  & > div > :nth-child(2) {
    transition: 0.8s;
    transition-delay: 0.02s;
    transform: translateX(calc(${cardWidth} * 2 - 200%)) translateY(-5%)
      rotateZ(0deg);
    background-color: black;
    color: white;
  }

  & > div > :nth-child(3) {
    transition: 0.8s;
    transition-delay: 0.04s;
    transform: translateX(calc(${cardWidth} * 1 - 170%)) translateY(-5%)
      rotateZ(15deg);
    background-color: green;
    color: white;
  }

  &:hover > div > div {
    transform: translateX(0) translateY(0) rotateZ(0);
  }

  &:hover > :first-child {
    transform: translateY(20%);
  }

  &:hover > div > div {
    transform: translateX(0) translateY(0) rotateZ(0);
  }

  @media (max-width: 1280px) {
    & > div > :nth-child(1),
    & > div > :nth-child(2),
    & > div > :nth-child(3) {
      transform: translateX(0) translateY(0) rotateZ(0);
      transition: none;
    }
  }

  @media (max-width: 768px) {
    & > div > :nth-child(1),
    & > div > :nth-child(2),
    & > div > :nth-child(3) {
      transform: translateX(0) translateY(0) rotateZ(0);
      transition: none;
    }
  }
`;

export const TeamBox = styled.div`
  display: flex;
  transition: 0.5s;
  gap: 10px;
  transform-origin: bottom;
  justify-content: center;
`;
export const TeamHeader = styled.div`
  margin-top: 15px;
  font-family: 'PT Serif';
  font-weight: bold;
  color: #dd1a1a;
  text-align: center;

  padding-top: 10px;
  width: 100%;
  margin-bottom: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-shadow: rgba(255, 255, 255, 0.425) 0px 54px 55px,
    rgba(255, 255, 255, 0.329) 0px -8px 30px,
    rgba(255, 255, 255, 0.411) 0px 4px 6px,
    rgba(255, 255, 255, 0.336) 0px 12px 13px,
    rgba(255, 255, 255, 0.281) 0px -3px 5px;

  transform: translateY(-15%);
  transition: 0.8s;
  transition-delay: 0.02s;
`;
