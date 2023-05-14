import styled from 'styled-components';
import cardBgImg from '../../images/card-bg.png';
import intelligenceImg from '../../images/counteroffensive.png';
// import cardBgImg from '../../images/card-bg.png';
// import cardBgImg from '../../images/card-bg.png';
// import cardBgImg from '../../images/card-bg.png';

export const CardItemWrapper = styled.li`
  padding: 30px;
  width: 400px;
  height: 600px;
  background-image: url(${cardBgImg});
  background-size: cover;
  background-position: center;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const CardInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('https://cdn.marvel.com/content/1x/003cap_com_crd_01.jpg');
  background-size: cover;
  background-position: center;
`;

export const SkillIconIntelligence = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${intelligenceImg});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
`;

export const SkillQuantity = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: #ff0000;
`;

const characteristics = {
  intelligence: 100,
  force: 100,
  speedAndAgility: 100,
  specialSkills: 100,
  fightingSkills: 100,
};
