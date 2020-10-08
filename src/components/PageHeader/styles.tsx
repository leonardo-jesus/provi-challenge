import styled from 'styled-components';
import { AppBar, makeStyles } from '@material-ui/core';
import myLogo from '../../assets/logo.png';

export const ImgCustom = styled.img.attrs({
  src: myLogo,
})`
  width: 150px;
  height: auto;
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
  },
  divider: {
    marginTop: "10px",
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
    marginTop: -15,
  },
  notificationsIcon: {
    marginTop: 7,
  },
  iconDiv: {
    marginLeft: 500,
  }
}));