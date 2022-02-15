import React, { useState } from "react";
import { Input } from "../Forms";
import {Button} from "../Forms";
import { Link, withRouter } from "react-router-dom";

function LogIn () {
    const [loginObject, setLoginObject] = useState({
        username: "",
        password:"",
        loggedIn: false
        });

        function handleInputChange(event) {
            const { name, value } = event.target;
            setLoginObject({...loginObject, [name]: value})
          
          };

        function handleFormSubmit(event) {
            event.preventDefault()
            const user= localStorage.getItem("username");
            const password= localStorage.getItem("password");
            const email= localStorage.getItem("email");
            if(loginObject.username === user | email && loginObject.password=== password){
                setLoginObject({...loginObject, loggedIn: true});
                console.log("logged in")
            } else {
                alert('Login information does not match our records');
            }
        };
        
    return (
       <div>
        <form>
            <Input
            onChange= {handleInputChange}
            name="username"
            value={loginObject.username}
            placeholder= "Username/email (required)"/> 

            <Input
            onChange= {handleInputChange}
            name="password"
            value={loginObject.password}
            placeholder= "Password (required)"/> 

            <Button
            name="Login"
            placeholder="Login"
            onClick={handleFormSubmit}>Login</Button>

        </form>

       </div>
    )
};

export default withRouter(LogIn);