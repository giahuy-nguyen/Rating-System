import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import logo from "./assets/logo.png";

const useStyles = makeStyles({
  title: {
    flex: 0,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginLeft: -8,
  },
  //   spacer: {
  //     flex: 1,
  //   },
  logo: {
    maxWidth: "200px",
    marginLeft: -7,
  },
});

const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} color="secondary">
      <Toolbar>
        <Link to={`/`}>
          <img src={logo} href alt="logo" className={classes.logo} />
        </Link>
      </Toolbar>
      {/* <Typography
        variant="initial"
        color="black"
        className={classes.title}
        fontWeight="780"
        marginLeft="50px"
        marginTop="8px"
      >
        ADMIN
      </Typography> */}
      {/* <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      /> */}
    </AppBar>
  );
};

export default MyAppBar;
