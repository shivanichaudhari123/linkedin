import styles from "./Formpart.module.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const Formpart=()=>{
    return(
        <div className={styles.formdata}>
           <div className={styles.form}>
               {/* <p>eneter your name</p> */}
               <span className={styles.font}>Welcome to your Professional Community</span>
                <div className={styles.inputs}>
                <TextField
                className={styles.textfiled}
                id="outlined-password-input"
                label="Email or Phone number"
                type="password"
                autoComplete="current-password"
                />
                </div>
                <div className={styles.inputs}>
                <TextField
                 className={styles.textfiled}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
                </div>
                <div>
                <p>Forgot Password?</p>
                </div>
                <div>
               <button className={styles.signinbtn}>Sign in</button>
                </div>
                <div>
                </div>
                <div className={styles.divider}>
                </div>
                <div className={styles.google}>
                <button className={styles.signinwithgoogle}>
                <img className={styles.googlelogo} src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" alt="googlelogo"/>
                    Sign in with Google</button>
                </div>
                {/* <hr class={styles.solid}></hr> */}
                {/* <div className={styles.divider}><span className={styles.solid}></span> <span>or</span><span className={styles.solid}></span></div> */}
                {/* <div className={styles.divider}><p><hr class={styles.solid}></hr></p> <span>or</span><p><hr class={styles.solid}></hr></p></div> */}
           </div>
           
           <div className={styles.imagelogo}>
               {/* <p>enter the image</p> */}
               <img className={styles.imagelogotag} src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" alt="humanlogo"/>
           </div>
        </div>
    );
}
export default Formpart;