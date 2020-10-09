import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Background = styled.div`
  height: 200px;
  width: 100%;
  top: 0;
  background: #1449a5;
`;

export const CustomizedGrid = styled(Grid)`
  padding: 40px 100px;
  zIndex: 999;
`;

export const CustomizedCard = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
  border-radius: 2px;
`;

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`; 