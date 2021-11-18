import styles from "./Postjob.module.css";
const Postjob=()=>{
    return(
        <div className={styles.explorepart}>
           <div className={styles.title}>
               <p className={styles.titlexplore}>Post your job for millions of people to see</p>
           </div>
           <div className={styles.contenttopic}>
               <p>Content topics</p>
               <button>Post Jobs </button>
               
           </div>
            
        </div>
    );
}
export default Postjob;