import React, { FC } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Divider, ListItemIcon } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

type Props = {
  amountPaid: string;
  monthlyInterest: string;
  totalAmmount: string;
}

export const TaxesCard: FC<Props> = ({ amountPaid, monthlyInterest, totalAmmount}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.titleDiv}>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Debts
          </Typography>
          <ListItemIcon className={classes.img}>{<ArrowForwardIosIcon />}</ListItemIcon>
        </div>
        <Divider orientation="horizontal" className={classes.dividerHor} flexItem />
        <Typography variant="subtitle1" className={classes.moneyBalance}>
          Amount Paid - {amountPaid}<br />
          Monthly Interest - {monthlyInterest}<br/>
          Total Amount in Taxes - <span className={classes.span}>{totalAmmount}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" className={classes.buttonPos}>Pay Taxes</Button>
      </CardActions>
    </Card>
  );
};