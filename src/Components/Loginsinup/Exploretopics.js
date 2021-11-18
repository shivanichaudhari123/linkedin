import styles from "./Exploretopics.module.css";
import { StylesProvider } from "@material-ui/core/styles";


// const StyledButton = styled(Button)`
//   background-color: red;
//   border-radius: 0;
// `;

const Exploretopics=()=>{
   
    return(
        <div className={styles.explorepart}>
           <div className={styles.title}>
               <p className={styles.titlexplore}>Explore Topics you are interested in</p>
           </div>
           <div className={styles.contenttopic}>
               <p>Content topics</p>
               <button>See all topics </button>
               <button>Science and enviornment </button>
           </div>
            
        </div>

    );
}
export default Exploretopics;