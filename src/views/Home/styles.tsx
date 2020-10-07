import styled from 'styled-components';
import { Grid, Card } from '@material-ui/core';

export const Background = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  top: 0;
  background: #99d7f2;
`;

export const CustomizedGrid = styled(Grid)`
  padding: 40px 100px;
  zIndex: 999;
`;

export const CustomizedCard = styled(Card)`
  display: flex;
  height: calc(100vh - 100px);
`;