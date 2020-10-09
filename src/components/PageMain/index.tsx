import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';

export const PageMain = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Card1 />
      <Card2 />
      <Card3 />
    </Box>
  );
};