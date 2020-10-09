import React, { useContext, useEffect } from 'react';
import { PageHeader, BalanceCard, TaxesCard, PageUserAvatar, PageUserIcons } from '../../components'
import { Background, CustomizedGrid, CustomizedCard, LoadingWrapper, useStyles } from './styles';
import { ThemeProvider, createMuiTheme, CircularProgress, Box } from '@material-ui/core';
import { UserContext } from '../../stores';

export const Home = () => {
  const { loading, userData, getUserInfo } = useContext(UserContext);
  const classes = useStyles();
  useEffect(() => {
    getUserInfo();
  }, []);

  const theme = createMuiTheme({
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
              <Box className={classes.boxUser}>
                <PageUserAvatar />
                <PageUserIcons />
              </Box>
              <Box className={classes.box}>
                <BalanceCard title="Provi Balance" balance={userData.amountTaken} status="Available" actionTitle1="Add Money" actionTitle2="Withdraw Money" />
                <TaxesCard amountPaid={userData.amountPayd} monthlyInterest={userData.monthlyInterest} totalAmmount={userData.totalAmountInTaxes} />
              </Box>
            </CustomizedCard>
          </CustomizedGrid>
        </CustomizedGrid>
      </Background>
    </ThemeProvider>
  );
};