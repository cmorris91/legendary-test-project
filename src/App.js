import React from "react";
import { BrowserRouter as Router, Redirect, Route, Routes, Switch, } from "react-router-dom";
import Header from "./components/header";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Plans from "./components/Plans";
import Payment from "./components/Payment";
import "./style.css";


function App() {
  return (
    
    <Router>
     <div>
       <Header/>
        <Switch>
          <Route exact path="/"><LogIn/></Route>
          <Route exact path="/signup"><SignUp/></Route>
          <Route exact path="/plans"><Plans/></Route>
          <Route exact path="/payment"><Payment/></Route>
        </Switch>
     </div>
   </Router> 
  
  )
}
export default App;
