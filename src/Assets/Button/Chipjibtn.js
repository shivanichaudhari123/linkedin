import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

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
const Chipjibtn=()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <div className={classes.rowfirst}>
        <Chip label="Engineering" variant="outlined" className={classes.chipStyle} />
        <Chip label="Bussiness Development" variant="outlined" className={classes.chipStyle} />
        <Chip label="Finance" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Administrative Assistant" variant="outlined" className={classes.chipStyle} />
        <Chip label="Retail Associate" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Customer Service" variant="outlined" className={classes.chipStyle} />
        <Chip label="Operation" variant="outlined" className={classes.chipStyle} />
        <Chip label="Information Technology" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Marketing" variant="outlined" className={classes.chipStyle} />
        <Chip label="Human Resource" variant="outlined" className={classes.chipStyle} />
        <Chip label="HealthCare Service" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Sales" variant="outlined" className={classes.chipStyle} />
        <Chip label="Program and Project Managment" variant="outlined" className={classes.chipStyle} />
        <Chip label="Accounting" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Art and Design" variant="outlined" className={classes.chipStyle} />
        <Chip label="Comminity and Social Service" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Consulting" variant="outlined" className={classes.chipStyle} />
        <Chip label="Education" variant="outlined" className={classes.chipStyle} />
        <Chip label="Enterpreneurship" variant="outlined" className={classes.chipStyle} />
        <Chip label="Legal" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Media and Communication" variant="outlined" className={classes.chipStyle} />
        <Chip label="Military and Protective Services" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Product Management" variant="outlined" className={classes.chipStyle} />
        <Chip label="Purchasing" variant="outlined" className={classes.chipStyle} />
        <Chip label="Quality Assurance" variant="outlined" className={classes.chipStyle} />
        </div>
        <div className={classes.rowfirst}>
        <Chip label="Real Estate" variant="outlined" className={classes.chipStyle} />
        <Chip label="Reasearch" variant="outlined" className={classes.chipStyle} />
        <Chip label="Support" variant="outlined" className={classes.chipStyle} />
        <Chip label="Administrative" variant="outlined" className={classes.chipStyle} />
        </div>
      </div>
    );
}
export default Chipjibtn;


