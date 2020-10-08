import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { PageUserAvatar } from '../PageUserAvatar';
import { PageUserIcons } from '../PageUserIcons';

export const PageUser = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <PageUserAvatar />
      <PageUserIcons />
    </Box>
  );
};