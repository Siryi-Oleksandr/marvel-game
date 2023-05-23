import styled from 'styled-components';

export const RingWrapper = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 768px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  @media (min-width: 940px) {
    width: 900px;
  }
`;
