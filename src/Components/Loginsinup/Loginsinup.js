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
import Shivani from "../../Assets/Button/Carousal";
import Realshivani from "../../Assets/Button/Realshivani";
import Doublecopyfooter from "./Doublecopyfooter";
import Conversationtoday from "./Conversationtoday";
import Stayuptodate from "./Stayuptodate";
import Carousal from "../../Assets/Button/Carousal";
const Loginsignup = () => {
  return (
    <div className={styles.Loginsignup}>
      <Navbar />
      <Formpart />
      <Exploretopics />
      <Joborinternship />
      <Postjob />
      {/* <Opentoworkscrolling />
      <Conversationtoday />
      <Stayuptodate /> */}
      <Carousal />
      {/* <Realshivani /> */}
      <Connectwithpeople />
      <Dream />
      <Joinfrnds />
      <Footer />
      {/* <Doublecopyfooter /> */}
      {/* <Links /> */}
    </div>
  );
};
export default Loginsignup;
