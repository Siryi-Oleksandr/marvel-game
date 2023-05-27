import styled from 'styled-components';
import { pallete } from 'helpers/variables';

export const SceletonTitle = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 26px;
  font-family: 'PT Serif';
  font-weight: bold;
  color: ${pallete.primaryRed};
  text-align: center;

  text-shadow: ${pallete.main_shadow};
`;
