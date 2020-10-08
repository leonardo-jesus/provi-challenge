import React from 'react';
import { PageHeader, PageUser } from '../../components'
import { Background, CustomizedGrid, CustomizedCard } from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

export const Home = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <CustomizedGrid>
          <CustomizedGrid>
            <CustomizedCard>
              <PageHeader />
              <PageUser />
            </CustomizedCard>
          </CustomizedGrid>
        </CustomizedGrid>
      </Background>
    </ThemeProvider>
  );
}

// export default Home;