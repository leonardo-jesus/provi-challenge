import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: "99%",
    height: "99%",
    // display: "flex",
    // flexDirection: "column",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridAutoRows: "1fr 2fr",
  },
}));