import Navbar from "./Navbar";
import styles from "./Loginsignup.module.css";
import Formpart from "./Formpart";
import Exploretopics from "./Exploretopics";
import Joborinternship from "./Joborinternship";
import Postjob from "./Postjob";
import Opentoworkscrolling from "./Opentoworkscrolling";
import Connectwithpeople from "./Connectwithepople";
import Dream from "./Dream";
const Loginsignup=()=>{
    return(
        <div className={styles.Loginsignup}>
            <Navbar/>
            <Formpart/>
            <Exploretopics/>
            <Joborinternship/>
            <Postjob/>
            <Opentoworkscrolling/>
            <Connectwithpeople/>
            <Dream/>
        </div>
    );
}
export default Loginsignup;