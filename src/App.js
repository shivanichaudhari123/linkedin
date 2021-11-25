import Loginsignup from "./Components/Loginsinup/Loginsinup";
//import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import {BrowserRouter, Route, Routes, Link, Redirect} from "react-router-dom";
//import { Routes ,Route } from 'react-router-dom';
import Nextpage from "./Pages/Nextpage";
import Signup from "./Pages/Signup";

function App() {
  return (
    <React.Fragment>
      <div>
        {/* <Loginsignup/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginsignup />} />
            <Route path="/Nextpage" element={<Nextpage />} exact={true} />
            {/* <Route path="/" exact>
              element={<Signup />}
            </Route> */}

            {/* {["/Signup", "/users", "/widgets"].map((path, index) => (
              <Route path={Signup} component={Signup} key={index} />
            ))} */}
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
