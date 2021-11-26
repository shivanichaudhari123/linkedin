import styles from "./Footerpart.module.css";
import {Link} from "react-router-dom";

const Doublecopyfooter = () => {
  const datalink = [
    {
      page: "/Signup",
      linkname: "Signup",
    },
    {
      page: "/About",
      linkname: "About",
    },
    {
      page: "/Blog",
      linkname: "Blog",
    },
    {
      page: "/Unilimited",
      linkname: "Unilimited",
    },
  ];
  return (
    <div className={styles.doublefooter}>
      {datalink.map((item) => (
        <Link to="/Signup">{item.linkname}</Link>
        // <Link to="/${datalink.page}">{item.linkname}</Link>
      ))}
    </div>
  );
};
export default Doublecopyfooter;
