import styled, { keyframes } from 'styled-components';

const orbitAnimation = keyframes`
  0% {
    transform:  rotate(0deg) translateX(100px);
  }

  100% {
    transform:  rotate(360deg) translateX(100px)
  }
`;

const orbitAnimationReverce = keyframes`
  0% {
    transform:  rotate(0deg) translateX(100px);
  }

  100% {
    transform:  rotate(-360deg) translateX(100px)
  }
`;

export const RingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 500px;
  transform-origin: center center;
`;

export const Card = styled.div`
  position: absolute;
  animation: ${orbitAnimation} 2s infinite linear;
`;

export const CardReverce = styled.div`
  position: absolute;
  animation: ${orbitAnimationReverce} 2s infinite linear;
`;

export const Card1 = styled(Card)`
  top: 0;
  left: 0;
`;
export const Card2 = styled(CardReverce)`
  top: 100px;
  left: 0;
`;
export const Card3 = styled(Card)`
  top: 200px;
  left: 0;
`;
export const Card4 = styled(CardReverce)`
  top: 0;
  right: 0;
`;
export const Card5 = styled(Card)`
  top: 100px;
  right: 0;
`;
export const Card6 = styled(CardReverce)`
  top: 200px;
  right: 0;
`;
