import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {},
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <>
      <header className="App-header">
        <Link color="inherit" href="/">
          <h2>{props.text}</h2>
        </Link>{" "}
      </header>
    </>
  );
};

export default Header;
