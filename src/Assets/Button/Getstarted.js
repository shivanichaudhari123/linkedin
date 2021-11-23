import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
//import { Icon } from 'antd';
const useStyles = makeStyles((theme) => ({
  
  chipStyle: {
      margin:'6px',
      padding:'3px',
    "&&:hover": {
      backgroundColor: "skyblue",
      textDecoration: "underline"
    }
  }
}));

 const Getstarted=()=>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rowfirst}>
      <Chip label="Get Started" variant="outlined" className={classes.chipStyle} />
      </div>
    </div>
  );
}
export default Getstarted;