import styled from 'styled-components';


export const SceletonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ClearTeamButton = styled.button`
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 17px;
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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px 40px 10px;
`;

export const SelectedTeamWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
export const CardWrapper = styled.div`
  cursor: pointer;
`;



