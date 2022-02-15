import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import Header from "./components/header";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import "./style.css";


function App() {
  return (
    <div>

      {/* <Header/> */}
      <SignUp/>
    </div>
  // //  <Router>
  //    <div>
  //      <Header/>
  //      {/* <LogIn/> */}
  //      <SignUp/>
  //    </div>
  //  {/* </Router> */}
  
  )
}
export default App;
