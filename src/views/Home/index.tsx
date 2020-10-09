import React, { useContext, useEffect } from 'react';
import { PageHeader, PageUser, PageMain } from '../../components'
import { Background, CustomizedGrid, CustomizedCard, LoadingWrapper } from './styles';
import { ThemeProvider, createMuiTheme, CircularProgress } from '@material-ui/core';
import { UserContext } from '../../stores';

export const Home = () => {
  const { loading, userData, getUserInfo } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);

  const theme =  createMuiTheme({
    palette: {
      primary: {
        main: '#1496ef',
      },
      secondary: {
        main: '#f5f5f5',
      }
    }
  });

  if(loading === true) {
    return (
      <LoadingWrapper><CircularProgress /></LoadingWrapper>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <CustomizedGrid>
          <CustomizedGrid>
            <CustomizedCard>
              <PageHeader />
              <PageUser />
              <PageMain />
            </CustomizedCard>
          </CustomizedGrid>
        </CustomizedGrid>
      </Background>
    </ThemeProvider>
  );
};