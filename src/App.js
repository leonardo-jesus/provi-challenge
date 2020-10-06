import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import PageHeader from './components/PageHeader/index.tsx'

const styles = () => ({
  root: {
     padding: "50px 100px",
     zIndex: 999,
     position: "absolute"
   },
   card: {
     display: "flex",
     height: "calc(100vh - 100px)"
   },
   background: {
     position: "absolute",
     height: 200,
     width: "100%",
     top: 0,
     background: "#99d7f2"
   },
 });

 const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>

        </Card>
      </Grid>
    </Grid>
  </div>
);

const list = [
  { id: 1, name: "Diego", text: "Lorem ipsum", image: "" },
  { id: 2, name: "Robson", text: "Lorem ipsum", image: "" },
  { id: 3, name: "Cleiton", text: "Lorem ipsum", image: "" }
];

export default withStyles(styles)(App);
