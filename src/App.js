import Loginsignup from "./Components/Loginsinup/Loginsinup";
import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Nextpage from "./Pages/Nextpage";


function App() {
  return (
    <React.Fragment>
    {/* <div>   
    <Router > 
      <Routes>
       <Route path="/Nextpage" component={() => <Nextpage/>} />
       </Routes>   
    </Router > 
    </div> */}
    <div className={Loginsignup}>
      <Loginsignup/>
    </div>

   
    </React.Fragment>
  );
}

export default App;
