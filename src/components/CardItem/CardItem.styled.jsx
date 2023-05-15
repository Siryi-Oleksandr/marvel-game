import styled from 'styled-components';
import cardBgImg from '../../images/card-bg.png';
import intelligenceImg from '../../images/intelligence.png';
import fightImg from '../../images/fight.png';
import forceImg from '../../images/force.png';
import speedImg from '../../images/speed.png';

export const CardItemWrapper = styled.li`
  position: relative;
  padding: 30px;
  width: 280px;
  height: 400px;
  background-image: url(${cardBgImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  overflow: hidden;

  &:hover .overley,
  &:focus .overley {
    transform: translatex(0);
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;

  font-weight: bold;
  font-size: 18px;
  line-height: calc(28 / 18);
  letter-spacing: 0.03em;

  color: red;
  background-color: rgba(0, 0, 0, 0.7);

  transform: translatex(100%);
  transition: transform 250ms ease-in-out;
`;

export const CardInfoWrapper = styled.div`
  position: relative;
  padding-bottom: 25px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
`;

export const SkillQuantity = styled.span`
  font-size: 35px;
  font-weight: 700;
  color: rgb(255, 69, 0);
`;

export const SkillIcon = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: rgba(255, 81, 0, 0.821) 0px 22px 70px 4px;
  border: 5px solid orangered;
`;

export const SkillIconIntelligence = styled(SkillIcon)`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-image: url(${intelligenceImg});
`;
export const SkillIconForce = styled(SkillIcon)`
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-image: url(${forceImg});
`;
export const SkillIconSpeed = styled(SkillIcon)`
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  background-image: url(${speedImg});
`;
export const SkillIconFight = styled(SkillIcon)`
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  background-image: url(${fightImg});
`;

export const HeroName = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  color: red;
  transform: perspective(400px) rotateX(40deg);
`;

export const HeroSkills = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;

export const HeroDescription = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: red;
`;
