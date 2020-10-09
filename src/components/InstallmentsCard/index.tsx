import React, { FC } from 'react';
import { Card, CardActions, CardContent, Button, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { useStyles } from './styles';

type Props = {
  installments: Array<any>;
}

export const InstallmentsCard:FC<Props> = ({ installments }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <List className={classes.list} subheader={<li />}>
          {installments.map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                {installments.map((item) => (
                  <ListItem className={classes.listItem} key={`item-${sectionId}-${item}`}>
                    {/* <ListItemText primary={`Item ${item}`} /> */}
                    <ListItemText primary={`Value: ${item.formatedValue}`} />
                    <ListItemText primary={`Paid: ${item.payd ? 'Yes' : 'No'}`} />
                    <ListItemText primary={`Due date: ${item.dueDate}`} />
                    <CardActions>
                      <Button size="medium" className={classes.buttonPos}>Pay this month</Button>
                    </CardActions>
                    <Divider orientation="horizontal" className={classes.dividerHor} flexItem />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </CardContent>
      {/* <CardActions>
        <Button size="medium" className={classes.buttonPos}>Pay Taxes</Button>
      </CardActions> */}
    </Card>
  );
};