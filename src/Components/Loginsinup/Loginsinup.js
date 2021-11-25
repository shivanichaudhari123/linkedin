import Navbar from "./Navbar";
import styles from "./Loginsignup.module.css";
import Formpart from "./Formpart";
import Exploretopics from "./Exploretopics";
import Joborinternship from "./Joborinternship";
import Postjob from "./Postjob";
import Opentoworkscrolling from "./Opentoworkscrolling";
import Connectwithpeople from "./Connectwithepople";
import Dream from "./Dream";
import Joinfrnds from "./Joinfrnds";
import Footer from "./Footerpart";
import Links from "../../Assets/Button/Link";
import Shivani from "../../Assets/Button/Shivani";
const Loginsignup = () => {
  return (
    <div className={styles.Loginsignup}>
      <Navbar />
      <Formpart />
      <Exploretopics />
      <Joborinternship />
      <Postjob />
      {/* <Opentoworkscrolling /> */}
      <Shivani />
      <Connectwithpeople />
      <Dream />
      <Joinfrnds />
      <Footer />
      {/* <Links /> */}
    </div>
  );
};
export default Loginsignup;
