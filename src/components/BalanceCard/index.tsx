import React, { FC } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Divider, ListItemIcon } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

type Props = {
  title: string;
  balance: string;
  status: string;
  actionTitle1: string;
  actionTitle2: string;
}

export const BalanceCard:FC<Props> = ({ title, balance, status, actionTitle1, actionTitle2 }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.titleDiv}>
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          <ListItemIcon className={classes.img}>{<ArrowForwardIosIcon />}</ListItemIcon>
        </div>
        <Divider orientation="horizontal" className={classes.dividerHor} flexItem />
        <Typography variant="h6" className={classes.moneyBalance}>
          R$ {balance}.00 BRL
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.buttonPos && classes.button1}>{actionTitle1}</Button>
          <Divider orientation="vertical" className={classes.dividerVert} flexItem />
        <Button size="small" className={classes.buttonPos && classes.button2}>{actionTitle2}</Button>
      </CardActions>
    </Card>
  );
};