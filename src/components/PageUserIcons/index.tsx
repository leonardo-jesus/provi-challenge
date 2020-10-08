import React from 'react';
import { Box, Typography, ListItemIcon, Divider } from '@material-ui/core';
import { useStyles } from './styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

export const PageUserIcons = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.textDiv}>
        <ListItemIcon className={classes.img}>{<CreditCardIcon />}</ListItemIcon>
        <Typography variant="subtitle1" className={classes.subtitle}>Pay or send money</Typography>
      </div>
      <Divider orientation="vertical" className={classes.divider} flexItem />
      <div className={classes.textDiv}>
        <ListItemIcon className={classes.img}>{<SmartphoneIcon />}</ListItemIcon>
        <Typography variant="subtitle1" className={classes.subtitle}>Get the Provi App</Typography>
      </div>
      <Divider orientation="vertical" className={classes.divider} flexItem />
      <div className={classes.textDivLast}>
        <ListItemIcon className={classes.img}>{<VerifiedUserIcon />}</ListItemIcon>
        <Typography variant="subtitle1" className={classes.subtitle}>Security Protection</Typography>
      </div>
    </Box>
  );
};