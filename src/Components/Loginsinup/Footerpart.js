import styles from "./Footerpart.module.css";
import About from "../../Pages/About";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Signup from "../../Pages/Signup";

import {Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ftdownarrow: {
    // topMargin:'-50px',
    margin: "-10px",
    padding: "10px",
  },
}));
const Footer = () => {
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
        <div>
          <p className={styles.genaral}>General</p>
          <a href="\Signup" className={styles.subp}>
            signup
          </a>
          <a href="\Signup" className={styles.subp}>
            Help center
          </a>
          {/* <Link to="/Signup">Help Center</Link> */}
          <a href="\Signup" className={styles.subp}>
            About
          </a>
          <a href="\signup" className={styles.subp}>
            Press
          </a>
          <a href="\signup" className={styles.subp}>
            About
          </a>
          <a href="\signup" className={styles.subp}>
            Blog
          </a>
          <a href="\signup" className={styles.subp}>
            Careers
          </a>
          <a href="\signup" className={styles.subp}>
            developers
          </a>
          {/* <a href="\signup"><span className={styles.subp}>Help center</span></a>
                <a href="\About"><span className={styles.subp}>About</span></a>
                <a href="\signup"><span className={styles.subp}>Press</span></a>
                <a href="\signup"><span className={styles.subp}>Blog</span></a>
                <a href="\signup"><span className={styles.subp}>Careers</span></a>
                <a href="\signup"><span className={styles.subp}>developers</span></a> */}
        </div>
        <div>
          <p>Browse Linkedin</p>
          <p className={styles.subp}>Learning</p>
          <p className={styles.subp}>Jobs</p>
          <p className={styles.subp}>Salary</p>
          <p className={styles.subp}>Mobile</p>
          <p className={styles.subp}>Service</p>
          <p className={styles.subp}>Products</p>
        </div>
        <div>
          <p>Bussiness Solutions</p>
          <p className={styles.subp}>Talent</p>
          <p className={styles.subp}>Marketing</p>
          <p className={styles.subp}>Sales</p>
          <p className={styles.subp}>Learning</p>
        </div>
        <div>
          <p>Directories</p>
          <p className={styles.subp}>Members</p>
          <p className={styles.subp}>Jobs</p>
          <p className={styles.subp}>Companies</p>
          <p className={styles.subp}>Salaries</p>
          <p className={styles.subp}>Laerning</p>
          <p className={styles.subp}>Posts</p>
          <p className={styles.subp}>Articles</p>
          <p className={styles.subp}>Schools</p>
          <p className={styles.subp}>News</p>
          <p className={styles.subp}>News Letters</p>
          <p className={styles.subp}>Services</p>
          <p className={styles.subp}>Interview Prep</p>
          <p className={styles.subp}>Products</p>
          <p className={styles.subp}>Content Topics</p>
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
