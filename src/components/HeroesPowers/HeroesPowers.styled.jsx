import styled from 'styled-components'

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: auto auto 30px;

`;

export const TabList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
`;

export const TabItem = styled.li`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;

  ${({ active }) =>
  active &&
  `
    font-weight: bold;
    border-color: #000;
  `}
`;

export const TabContent = styled.div`
  .tab-item {
    display: none;

    &.active {
      display: block;
    }
  }
`;

export const Header = styled.div`
  font-size: 24px;
  width: 900px;
  margin: 30px auto 15px;


`;
