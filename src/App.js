import React from "react";
import { BrowserRouter as Router, Redirect, Route, Routes, Switch, } from "react-router-dom";
import Header from "./components/header";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import "./style.css";


function App() {
  return (
    
    <Router>
     <div>
       <Header/>
        <Switch>
          <Route path="/signup"><SignUp/></Route>
          <Route path="/"><LogIn/></Route>
        </Switch>
     </div>
   </Router> 
  
  )
}
export default App;
