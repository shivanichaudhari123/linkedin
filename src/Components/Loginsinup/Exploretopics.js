import styles from "./Exploretopics.module.css";
import { StylesProvider } from "@material-ui/core/styles";
import OutlinedChips from "../../Assets/Button/Chipbtn";
import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@mui/system";
//import ExpandLess from "@mui/icons-material/ExpandLess";
// import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState, useRef} from "react";


const useStyles = makeStyles((theme) => ({
    chipStyle: {
      "&&:hover": {
        backgroundColor: "grey",
        textDecoration: "underline"
      }
    },
    parent:{
        display:'flex',
        flexDirection:'column',
    },
    expanless:{
      margin:'20px',
      border:'1px solid black',
    }
  }));

const Exploretopics=()=>{
    const classes = useStyles();
    //const [showless, setShowless] =useState(true);
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
      setOpen(!open);
    };
    //  setOpen(open ? true : e.currentTarget);
    const anchorRef = useRef(null);
  
   
    return(
        <div className={styles.explorepart}>
           <div className={styles.title}>
               <p className={styles.titlexplore}>Explore Topics you are interested in</p>
               
           </div>
           <div className={styles.contenttopic}>
               <p>Content topics</p>
               <div className={classes.parent}>
               <OutlinedChips className={classes.chip}/>
               </div>
               <div >
                <button onClick={handleClick} className={classes.expanless}><ExpandLess/>less</button>
                <button onClick={handleClick} ref={anchorRef} className={classes.expanless}>more<ExpandMoreIcon/></button>
                </div>
           </div>
           
            
        </div>

    );
}
export default Exploretopics;