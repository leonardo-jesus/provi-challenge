import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, List, ListSubheader, ListItem, ListItemText, Divider } from '@material-ui/core';
import { useStyles } from './styles';

export const InstallmentsCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <List className={classes.list} subheader={<li />}>
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                {[0, 1, 2].map((item) => (
                  <ListItem className={classes.listItem} key={`item-${sectionId}-${item}`}>
                    {/* <ListItemText primary={`Item ${item}`} /> */}
                    <ListItemText primary={`Value: `} />
                    <ListItemText primary={`Payd: `} />
                    <ListItemText primary={`Due date: `} />
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