import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./Opentoworkscrolling.module.css";
import Nextpage from '../../Pages/Nextpage';
import {useNavigate,useHistory} from 'react-router-dom';
//import { createBrowserHistory, History } from 'history';
///import {useHistory} from "react-router-dom";
const Prevnextnav=()=>{
    // const history = useHistory();
    // const nextpage=()=>{
    //     history.push('/Nextpage');
    // }

    const navigate = useNavigate();
    const nextpage = () => {
        navigate('/Nextpage');
    }  
    return(
       <div className={styles.prevnext}>    
            <button className={styles.btnmargin}><ArrowBackIosNewIcon/><span className={styles.previous}>Previous</span></button>
            <button onClick={nextpage}>Next<ArrowForwardIosIcon/></button>
       </div>
    );
}
export default Prevnextnav;