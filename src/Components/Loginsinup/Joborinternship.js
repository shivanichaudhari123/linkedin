import styles from "./Joborinternship.module.css";
//import Joborinternship from "../../Assets/Button/Jobinternbtn";
import Chipjibtn from "../../Assets/Button/Chipjibtn";
const Joborinternship=()=>{
    return(
        <div className={styles.explorepart}>
           <div className={styles.title}>
               <p className={styles.titlexplore}>Find a right job or internship for you</p>
           </div>
           <div className={styles.contenttopic}>
               <p>Suggested Searches</p>
               <Chipjibtn/>
                {/* <button>enginerring </button>
               <button>finance </button>  */}
           </div>
            
        </div>
        
    );
}
export default Joborinternship;

// <div className={styles.jobinternshipart}>
        //    <div classname={styles.fobinternshiptitle}>
        //        <p className={styles.title}>Find a right job or internship for you</p>
        //    </div>
        //    <div className={styles.jobinternshipartbtns}>
        //        <button>enginerring</button>
        //        <button>finance</button>
        //    </div>
        // </div>