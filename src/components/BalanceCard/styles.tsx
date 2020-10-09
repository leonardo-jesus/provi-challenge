import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "23vw",
    height: "18vh",
    marginTop: "20px",
    boxShadow: "none",
    borderRadius: 0,
    padding: "20px",
    gridArea: "1 / 1 / 2 / 1"
  },
  title: {
    marginTop: "-20px",
    fontSize: "20px",
  },
  pos: {
    marginBottom: "0",
  },
  dividerVert: {
    marginTop: "2px",
    height: "30px",
    background: "rgba(0, 0, 0, .3)",
  },
  dividerHor: {
    marginTop: "0",
    marginBottom: "10px",
    width: "420px",
    height: "1px",
    background: "rgba(0, 0, 0, .3)",
  },
  buttonPos: {
    marginLeft: "0",
    marginTop: "-15px",
    color: "#E74C3C",
  },
  moneyBalance: {
    fontSize: "16px",
  },
  img: {
    transform: "scale(0.9)",
    marginTop: "-16px",
    marginRight: "-45px",
  },
  titleDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  span: {
    color: "#E74C3C"
  },
  button1: {
    color: "#2ECC71",
  },
  button2: {
    color: "#E74C3C",
  },
}));