import Loginsignup from "./Components/Loginsinup/Loginsinup";
//import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import {BrowserRouter, Route, Routes, Link, Redirect} from "react-router-dom";
//import { Routes ,Route } from 'react-router-dom';
import Nextpage from "./Pages/Nextpage";

function App() {
  return (
    <React.Fragment>
      <div>
        {/* <Loginsignup/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginsignup />} />

            <Route path="/Nextpage" element={<Nextpage />} exact={true} />
          </Routes>
        </BrowserRouter>
        {/* <Router > 
      <Routes>
      <Route path="/" component={() => <Loginsignup/>} />
       <Route path="/Nextpage" component={() => <Nextpage/>} />
       </Routes>   
    </Router >  */}
      </div>
      {/* <div className={Loginsignup}>
      <Loginsignup/>
    </div> */}
      {/* <div>
      <Loginsignup/>
    </div> */}
    </React.Fragment>
  );
}

export default App;
