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
  //border: 1px solid #ccc;
  padding: 10px 15px;
  background-color: #3b4072;
  color: black;
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
  width: 100%;
  color: red;
  font-weight: 600;
  margin: 30px auto 15px;
  display: flex;
  justify-content: center;


`;
