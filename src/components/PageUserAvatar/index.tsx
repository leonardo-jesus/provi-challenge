import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const PageUserAvatar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <img src={require("../../assets/avatar")} alt="Avatar" className={classes.img}></img>
      <div className={classes.textDiv}>
        <Typography variant="h5" className={classes.title}>Hello again,</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>We're glad you came back! :)</Typography>
      </div>
    </Box>
  );
};