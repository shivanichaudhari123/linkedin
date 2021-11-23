import styles from "./Dream.module.css";
import Vedioutube from "../../Assets/Button/Vedioutube";
const Dream=()=>{
    return (
        <div className={styles.Dream}>
           <div className={styles.vedio}>
               {/* <p>Vedio</p> */}
               <Vedioutube/>
           </div>
           <div className={styles.caption}>
           <p className={styles.subcaption}>In it to chase my dream</p>
           </div>
        </div>
    );
}
export default Dream;