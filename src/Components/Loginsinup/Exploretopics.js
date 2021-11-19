import styles from "./Exploretopics.module.css";
import { StylesProvider } from "@material-ui/core/styles";
import OutlinedChips from "../../Assets/Button/Chipbtn";
import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@mui/system";
// import Collapse from "@material-ui/core/Collapse";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";

// const StyledButton = styled(Button)`
//   background-color: red;
//   border-radius: 0;
// `;

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
    }
  }));

const Exploretopics=()=>{
    const classes = useStyles();
   
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
           </div>
            
        </div>

    );
}
export default Exploretopics;