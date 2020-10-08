import styled from 'styled-components';
import { AppBar, makeStyles } from '@material-ui/core';
import myLogo from '../../assets/logo.png';

export const ImgCustom = styled.img.attrs({
  src: myLogo,
})`
  width: 150px;
  height: auto;
  margin-right: -8px;
`;

export const AppBarCustom = styled(AppBar)`
  position: relative;
  background: red;
  height: 65px;
  border: 0;
  box-shadow: none;
`;

export const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    marginTop: 5,
    marginBottom: 5,
  },
  divider: {
    marginTop: "18px",
    marginRight: 20,
    height: "45px",
  },
  typo: {
    marginRight: 20,
    fontSize: "16px",
    pointer: "hover",
  },
  logout: {
    width: "100px",
    margin: 0,
  },
  iconDivRight: {
    width: "15%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: -12,
  },
  iconDivLeft: {
    width: "1350px",
    margin: 0,
    marginLeft: -50,
    display: "flex",
    justifyContent: "flex-start",
    justifySelf: "flex-start",
    alignItems: "center",
  }
}));