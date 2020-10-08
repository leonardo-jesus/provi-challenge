import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "46vw",
    height: "185px",
    marginTop: "0",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "16px",
    color: "#ffffff",
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "30px",
    marginRight: "30px",
  },
  textDivLast: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "30px",
    marginRight: "0",
  },
  divider: {
    marginTop: "20px",
    marginLeft: 20,
    marginRight: 20,
    height: "145px",
    background: "rgba(255, 255, 255, .4)",
  },
  img: {
    color: "rgba(255, 255, 255, .7)",
    transform: "scale(2)",
    marginBottom: "25px",
    marginLeft: "60px",
  }
}));