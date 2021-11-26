import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  chipStyle: {
    margin: "6px",
    padding: "3px",
    "&&:hover": {
      backgroundColor: "grey",
      textDecoration: "underline",
    },
  },
  signin: {
    width: "100px",
    borderRadius: "20px",
  },
}));

const Signinbtn = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" className={classes.signin}>
        Sign in
      </Button>
    </div>
  );
};
export default Signinbtn;
