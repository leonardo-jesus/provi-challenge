import React from 'react';
import { Toolbar, Button, Divider, Typography, Icon, ListItemIcon } from '@material-ui/core';
import { ImgCustom, AppBarCustom, useStyles } from './styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

export const PageHeader = () => {
  const classes = useStyles();

  return (
      <AppBarCustom color="secondary" position="relative" className={classes.appBar}>
        <Toolbar>
          <ImgCustom></ImgCustom>
          <Divider orientation="vertical" className={classes.divider} flexItem />
          <Typography variant="h6" color="primary" className={classes.typo}>Summary</Typography>
          <Divider orientation="vertical" className={classes.divider} flexItem />
          <Typography variant="h6" className={classes.typo}>Activity</Typography>
          <Divider orientation="vertical" className={classes.divider} flexItem />
          <Typography variant="h6" className={classes.typo}>Send and Request</Typography>
          <Divider orientation="vertical" className={classes.divider} flexItem />
          <Typography variant="h6" className={classes.typo}>Wallet</Typography>
          <Divider orientation="vertical" className={classes.divider} flexItem />
          <Typography variant="h6" className={classes.typo}>Shopping</Typography>
          <div className={classes.iconDiv}>
            <ListItemIcon className={classes.notificationsIcon}>{<NotificationsIcon />}</ListItemIcon>
            <ListItemIcon className={classes.notificationsIcon}>{<SettingsIcon />}</ListItemIcon>
            <Button color="primary" variant="contained" className={classes.logout}>Log Out</Button>
          </div>
        </Toolbar>
      </AppBarCustom>
  );
};