import styled from 'styled-components';

export const CardListWrapper = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 768px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media (min-width: 940px) {
    width: 900px;
  }
`;
