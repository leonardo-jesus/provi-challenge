import React, { useContext } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Divider, ListItemIcon } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { UserContext } from '../../../stores';

export const Card1 = () => {
  const { userData } = useContext(UserContext);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.titleDiv}>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Provi balance
          </Typography>
          <ListItemIcon className={classes.img}>{<ArrowForwardIosIcon />}</ListItemIcon>
        </div>
        <Divider orientation="horizontal" className={classes.dividerHor} flexItem />
        <Typography variant="h6" className={classes.moneyBalance}>
          R$ 3000.00 BRL
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Avaliable
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.buttonPos && classes.button1}>Add Money</Button>
        <Divider orientation="vertical" className={classes.dividerVert} flexItem />
        <Button size="small" className={classes.buttonPos && classes.button2}>Withdraw Money</Button>
      </CardActions>
    </Card>
  );
};