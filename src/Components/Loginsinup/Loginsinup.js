import Navbar from "./Navbar";
import styles from "./Loginsignup.module.css";
import Formpart from "./Formpart";
import Exploretopics from "./Exploretopics";
import Joborinternship from "./Joborinternship";
import Postjob from "./Postjob";
const Loginsignup=()=>{
    return(
        <div className={styles.Loginsignup}>
            <Navbar/>
            <Formpart/>
            <Exploretopics/>
            <Joborinternship/>
            <Postjob/>
        </div>
    );
}
export default Loginsignup;