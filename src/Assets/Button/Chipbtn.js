import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
//import { Icon } from 'antd';
const useStyles = makeStyles((theme) => ({
  
  chipStyle: {
      margin:'6px',
      padding:'3px',
    "&&:hover": {
      backgroundColor: "grey",
      textDecoration: "underline"
    }
  },
  root:{
    display:'flex',
    flexDirection:'column',
},
rowfirst:{
    display:'flex',
    flexDirection:'row',
}
}));

 const OutlinedChips=()=>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rowfirst}>
      <Chip label="See all topics" variant="outlined" className={classes.chipStyle} />
      <Chip label="Science and Enviornment" variant="outlined" className={classes.chipStyle} />
      </div>
      <div className={classes.rowfirst}>
      <Chip label="Marketing and Advertising" variant="outlined" className={classes.chipStyle} />
      <Chip label="Sales and retails" variant="outlined" className={classes.chipStyle} />
      <Chip label="Technology" variant="outlined" className={classes.chipStyle} />
      </div>
      <div className={classes.rowfirst}>
      <Chip label="Finance and Economy" variant="outlined" className={classes.chipStyle} />
      <Chip label="Health" variant="outlined" className={classes.chipStyle} />
      <Chip label="Bussiness Management" variant="outlined" className={classes.chipStyle} />
      </div>
      <div className={classes.rowfirst}>
      <Chip label="Lifestyle and Liesure" variant="outlined" className={classes.chipStyle} />
      <Chip label="Society And Culture" variant="outlined" className={classes.chipStyle} />
      </div>
      <div className={classes.rowfirst}>
      <Chip label="Art and Entertainment" variant="outlined" className={classes.chipStyle} />
      <Chip label="Education and Learning" variant="outlined" className={classes.chipStyle} />
      </div>
      <div className={classes.rowfirst}>
      <Chip label="Sports and Fitness" variant="outlined" className={classes.chipStyle} />
      <Chip label="Career and Advertisement" variant="outlined" className={classes.chipStyle} />
      </div>
    </div>
  );
}
export default OutlinedChips;

      