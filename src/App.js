import Loginsignup from "./Components/Loginsinup/Loginsinup";
import React from "react";
import {BrowserRouter, Route, Routes, Link, Redirect} from "react-router-dom";
import Nextpage from "./Pages/Nextpage";
import Signup from "./Pages/Signup";
import Helpcenter from "./Pages/Helpcenter";
import About from "./Pages/About";

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginsignup />} />
            <Route path="/Nextpage" element={<Nextpage />} exact={true} />
            <Route path="/Helpcenter" element={<Helpcenter />} exact={true} />
            <Route path="/About" element={<About />} exact={true} />

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
