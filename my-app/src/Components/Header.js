import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = (props) => {
  const classes = useStyles();

  return (
    <>
      <header className="App-header">
        <h2>{props.text}</h2>
        <div className={classes.root}>
          <HomeIcon style={{ fontSize: 40 }} />
        </div>
      </header>
    </>
  );
};

export default Header;
