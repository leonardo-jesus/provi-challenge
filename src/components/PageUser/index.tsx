import React from 'react';
import { Box} from '@material-ui/core';
import { useStyles } from './styles';
import { PageUserAvatar } from '../PageUserAvatar';

export const PageUser = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <PageUserAvatar />
    </Box>
  );
};