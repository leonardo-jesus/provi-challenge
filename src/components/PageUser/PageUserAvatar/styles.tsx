import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "30vw",
    height: "185px",
    background: "#1496ef",
    marginTop: "0",
  },
  img: {
    marginLeft: "-40px",
    transform: "scale(.5)",
  },
  title: {
    color: "#ffffff",
    fontSize: "36px",
    textAlign: "left",
  },
  subtitle: {
    textAlign: "left",
    fontSize: "14px",
    color: "#ffffff",
  },
  textDiv: {
    marginLeft: "-20px",
    display: "flex",
    flexDirection: "column",
  }
}));