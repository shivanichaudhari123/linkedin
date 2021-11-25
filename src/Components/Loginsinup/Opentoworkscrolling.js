import Prevnextnav from "./prevnextnav";
import styles from "./Opentoworkscrolling.module.css";
import Carousel from "react-elastic-carousel";
const Opentoworkscrolling = () => {
  return (
    <div className={styles.workplatform}>
      <div>
        <Prevnextnav />
      </div>
      <div className={styles.seperation}>
        <div className={styles.info}>
          <div className={styles.heading}>
            <p>Let the right people know </p>
            <p className={styles.secondheading}>you're open to work</p>
          </div>
          <div className={styles.infosec}>
            <p className={styles.infodescription}>
              With the Open to work feature you can privately tell recruiters or
              publicly share with the Linkedin community that you are looking
              for new job opportunities.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <img
            className={styles.mblinhand}
            src="https://thumbs.dreamstime.com/b/linkedin-mobile-application-cell-phone-montreal-canada-march-screen-samsung-s-hand-68051804.jpg"
            alt="mblinhand"
          />
        </div>
      </div>
    </div>
  );
};
export default Opentoworkscrolling;
