import React, {useState} from "react";
import {Input} from "../../components/Forms";
import { Button } from "../../components/Forms";
import { Link, withRouter } from "react-router-dom";


function SignUp() {
    const [formObject, setFormObject] = useState({
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
        // confirmPassword:""
        })

    function handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})

    };

    function handleFormSubmit(event) {
        event.preventDefault();
        localStorage.setItem("firstName", formObject.firstName);
        localStorage.setItem("lastName", formObject.lastName);
        localStorage.setItem("email", formObject.email);
        localStorage.setItem("username", formObject.username);
        localStorage.setItem("password", formObject.password);
        console.log(formObject)
        alert('Your Account Was Sucessfully Created!')
    }
    return(
        <div>
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
                onClick={handleFormSubmit}/>
            </form>
        </div>
    )
};

export default withRouter(SignUp);
