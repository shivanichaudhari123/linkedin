import react from "react";
import styles from "./Footerpart.module.css";
import About from "../../Pages/About";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Signup from "../../Pages/Signup";
import {browserHistory as history} from "react-router";
import {useNavigate} from "react-router-dom";

import {Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ftdownarrow: {
    // topMargin:'-50px',
    margin: "-10px",
    padding: "10px",
  },
}));
const Footer = () => {
  //const history = useHistory();
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div>
      <div className={styles.linkedinlogo}>
        <div>
          <img
            className={styles.logo}
            src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
            alt="linkedinlogo"
          />
        </div>
        <div className={styles.firstgrp}>
          <p className={styles.genaral}>General</p>
          <button className={styles.btn} onClick={() => navigate("/Signup")}>
            Signup
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate("/Help Center")}
          >
            About
          </button>
          <button className={styles.btn} onClick={() => navigate("/About")}>
            About
          </button>
          <button className={styles.btn} onClick={() => navigate("/Press")}>
            Press
          </button>
          <button className={styles.btn} onClick={() => navigate("/Blog")}>
            Blog
          </button>
          <button className={styles.btn} onClick={() => navigate("/Careers")}>
            Careers
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate("/Developers")}
          >
            Developers
          </button>
        </div>
        <div className={styles.firstgrp}>
          <p className={styles.genaral}>Browse Linkedin</p>
          <button className={styles.btn} onClick={() => navigate("/Learning")}>
            Learning
          </button>
          <button className={styles.btn} onClick={() => navigate("/Jobs")}>
            Jobs
          </button>
          <button className={styles.btn} onClick={() => navigate("/Salary")}>
            Salary
          </button>
          <button className={styles.btn} onClick={() => navigate("/Mobile")}>
            Mobile
          </button>
          <button className={styles.btn} onClick={() => navigate("/Service")}>
            Service
          </button>
          <button className={styles.btn} onClick={() => navigate("/Products")}>
            Products
          </button>
        </div>
        <div className={styles.firstgrp}>
          <p className={styles.genaral}>Bussiness Solutions</p>
          <button className={styles.btn} onClick={() => navigate("/Talent")}>
            Talent
          </button>
          <button className={styles.btn} onClick={() => navigate("/Marketing")}>
            Marketing
          </button>
          <button className={styles.btn} onClick={() => navigate("/Sales")}>
            Sales
          </button>
          <button className={styles.btn} onClick={() => navigate("/Learning")}>
            Learning
          </button>
        </div>
        <div className={styles.firstgrp}>
          <p className={styles.genaral}>Directories</p>
          <button className={styles.btn} onClick={() => navigate("/Members")}>
            Members
          </button>
          <button className={styles.btn} onClick={() => navigate("/Jobs")}>
            Jobs
          </button>
          <button className={styles.btn} onClick={() => navigate("/Companies")}>
            Companies
          </button>
          <button className={styles.btn} onClick={() => navigate("/Salaries")}>
            Salaries
          </button>
          <button className={styles.btn} onClick={() => navigate("/Learning")}>
            Learning
          </button>
          <button className={styles.btn} onClick={() => navigate("/Posts")}>
            Posts
          </button>
          <button className={styles.btn} onClick={() => navigate("/Articles")}>
            Articles
          </button>
          <button className={styles.btn} onClick={() => navigate("/Schools")}>
            Schools
          </button>
          <button className={styles.btn} onClick={() => navigate("/News")}>
            News
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate("/News Letters")}
          >
            News Letters
          </button>
          <button className={styles.btn} onClick={() => navigate("/Services")}>
            Services
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate("/Interview Prep")}
          >
            Interview Prep
          </button>
          <button className={styles.btn} onClick={() => navigate("/Products")}>
            Products
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate("/Content Topics")}
          >
            Content Topics
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.twodiv}>
          <div>
            <img
              className={styles.footerline}
              src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-Black-Logo.wine.svg"
              alt="blackandwhitelogo"
            />
          </div>
          <div>
            <img
              className={styles.footercopyright}
              src="https://uploads-ssl.webflow.com/5de2db6d3719a1e2f3e4454c/5de41ed39f8e641807b72081_copyright-C-symbol.png"
              alt="Copyright"
            />
          </div>
        </div>
        <div>
          <p className={styles.ft}>user</p>
        </div>
        <div>
          <p className={styles.ft}>Accessibility</p>
        </div>
        <div>
          <p className={styles.ft}>User Argreement</p>
        </div>
        <div>
          <p className={styles.ft}>Privacy Policy</p>
        </div>
        <div>
          <p className={styles.ft}>Cokkie Policy</p>
        </div>
        <div>
          <p className={styles.ft}>Copyright Policy</p>
        </div>
        <div>
          <p className={styles.ft}>Brand Policy</p>
        </div>
        <div>
          <p className={styles.ft}>Guest Control</p>
        </div>
        <div>
          <p className={styles.ft}>Community Guidelines</p>
        </div>
        <div>
          <p className={styles.ft}>Languages</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

// <Link to={`/users/${user.id}`} activeClassName="current">
//   {user.name}
// </Link>;
