import styles from "./Joinfrnds.module.css";
import Getstarted from "../../Assets/Button/Getstarted";
const Joinfrnds=()=>{
    return(
        <div className={styles.joinfrnds}>
            <div><p className={styles.caption}>Join your Colleagues,classmates and friends on LInkedin.</p></div>
            <div className={styles.getstarted}> <Getstarted/></div>
            <img className={styles.imgfrnds} src="https://i.easil.com/wp-content/uploads/20190717152600/ornate_picture_frame_template_linkedin_cover_company-2-800x400.jpg" alt="classmatefrnds"/>
           
        </div>
    );
}
export default Joinfrnds;