import styled from 'styled-components';
import { pallete } from 'helpers/variables';

export const GoBtn = styled.button`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 60px;

  font-size: 24px;
  font-family: 'PT Serif';
  line-height: 1.2;
  color: ${pallete.whitesmoke};

  background: ${pallete.primaryRed};
  box-shadow: 0px 0px 15px ${pallete.primaryRed};
  border-radius: 10px;

  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
