import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "95.8%",
    maxHeight: "53.60%",
    overflow: "auto",
    marginTop: "20px",
    boxShadow: "none",
    borderRadius: 0,
    padding: "20px",
    gridArea: "1 / 2 / 3 / 4"
  },
  list: {
    width: "100%",
    height: "98%",
  },
  listSection: {
    backgroundColor: 'inherit',
    display: "flex",
  },
  ul: {
    backgroundColor: 'inherit',
  },
  title: {
    marginTop: "-20px",
    fontSize: "20px",
  },
  pos: {
    marginBottom: "0",
  },
  buttonPos: {
    marginLeft: "-10px",
    marginTop: "-5px",
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
  listItem: {
    width: "45vw",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "16px",
  },
  dividerHor: {
    marginTop: "0",
    marginBottom: "10px",
    width: "820px",
    height: "1px",
    background: "rgba(0, 0, 0, .3)",
  },
}));