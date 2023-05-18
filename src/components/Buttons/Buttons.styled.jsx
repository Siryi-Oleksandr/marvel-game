import styled from 'styled-components';

export const GoBtn = styled.button`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 67px;

  font-size: 24px;
  font-family: 'PT Serif';
  line-height: 1.2;
  color: whitesmoke;

  background: #ff0000;
  box-shadow: 0px 0px 15px #ff0000;
  border-radius: 10px;

  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
