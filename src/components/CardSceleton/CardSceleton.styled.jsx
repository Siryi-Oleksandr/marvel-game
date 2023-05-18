import styled from 'styled-components';
import cardBgImg from '../../images/card-bg.png';

export const Card = styled.li`
  position: relative;
  padding: 30px;
  width: 280px;
  height: 400px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${props => props.imgUrl});
  background-color: rgba(0, 0, 0, 0.74);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* filter: blur(1px); */
`;
