import React, {useState} from "react";
import {Input} from "../../components/Forms";
import { Button } from "../../components/Forms";
import { Link, withRouter } from "react-router-dom";
import "./style.css";


function SignUp() {
    const [formObject, setFormObject] = useState({
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
        // confirmPassword:""
        });


    function handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})

    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if(formObject.firstName==''| formObject.lastName==''| formObject.email==''| formObject.username==''| formObject.password=='') {
            alert("all fields must be completed")
        } else {
            localStorage.setItem("firstName", formObject.firstName);
            localStorage.setItem("lastName", formObject.lastName);
            localStorage.setItem("email", formObject.email);
            localStorage.setItem("username", formObject.username);
            localStorage.setItem("password", formObject.password);
            console.log(formObject)
            alert('Your Account Was Sucessfully Created!')
            window.location.replace("/plans")
        }
    };

    return(
        <div className="row signUpContainer">
            <div className="col signUpForm">
            <h1>Create Account</h1>
            <form>
                <Input 
                onChange= {handleInputChange}
                name="firstName"
                value={formObject.firstName}
                placeholder= "First Name (required)"/>

                <Input
                onChange= {handleInputChange}
                name="lastName"
                value={formObject.lastName}
                placeholder= "Last Name (required)"/>

                <Input
                onChange= {handleInputChange}
                name="email"
                value={formObject.email}
                placeholder= "Email Address (required)"/> 

                <Input
                onChange= {handleInputChange}
                name="username"
                value={formObject.username}
                placeholder= "Username (required)"/> 

                <Input
                onChange= {handleInputChange}
                name="password"
                value={formObject.password}
                placeholder= "Password (required)"/> 

                {/* <Input
                onChange= {handleInputChange}
                name="confirmPassword"
                value={formObject.confirmPassword}
                placeholder= "Confirm Password (required)"/>  */}

                <Button
                name="signUp"
                placeholder="Create Account"
                onClick={handleFormSubmit}>Create My Account</Button>

                <Link to={"/"} className="cancelBtn">
                    <button>Cancel</button>
                </Link>
                
            </form>
            <div className="pageSwitch">
                <p>Don't have an account yet? 
                <Link to={"/"} className="linkBtn">
                    Log In
                </Link>
                </p>
            </div>
            </div>
            <div className="col signUpText">
                <h1>Let's Begin Collecting Together!</h1>
                <p>Please enter the required information to create a new account on <br/>Legendary Collections</p>
            </div>
        </div>
    )
};

export default withRouter(SignUp);
