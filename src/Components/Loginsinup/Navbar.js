import styles from "./Navbar.module.css";
import Button from '@mui/material/Button';
///import Btn from "../../Assets/Button/Btn";
//import styles from "../../Assets/Styling/Styling.module.css";
import React from "react";
const Navbar=()=>{
    return(
        <div className={styles.navbar}>
            <div>
            <img className={styles.logo} src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="linkedinLogo"/>
            </div>
            <div className={styles.buttons}>
            <Button className={styles.joinnow} variant="text">Join now</Button>
            {/* <button className={styles.signin}>Sign In</button> */}
            <Button variant="outlined" defaultValue={30} className={styles.signin}
                // sx={{
                //     width: 100,
                //     borderRadius: '30px',
                //     hover:{
                //         backgroundColor:'grey',
                //         cursor:'pointer',
                //     }
                // }}
                >Sign in</Button>

                {/* <Btn className={styles.signincorner}/> */}

{/* 
            <Button
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'success.main',
                    '& .MuiSlider-thumb': {
                    borderRadius: '1px',
                    },
                }}
                /> */}
            </div>


        </div>
    );
}
export default Navbar;