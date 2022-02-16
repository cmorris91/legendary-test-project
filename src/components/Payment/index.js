import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Input } from "../Forms";
import { Button } from "../Forms";
import "./style.css";

function Payment() {
    const [paymentForm, setPaymentForm] = useState({
        cardNumber: "",
        expiration: "",
        cvc: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPaymentForm({...paymentForm, [name]: value})
      
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        if(paymentForm.cardNumber==''| paymentForm.expiration==''| paymentForm.cvc=='') {
            alert("all fields must be completed")
        } else {
            localStorage.setItem("cardnumber", paymentForm.cardNumber);
            localStorage.setItem("expiration", paymentForm.expiration);
            localStorage.setItem("cvc", paymentForm.cvc);
            window.location.reload()
        }
    };

    return (
        <div>
            <form>
                <Input
                    onChange= {handleInputChange}
                    name="cardNumber"
                    value={paymentForm.cardNumber}
                    placeholder= "Credit Card Number (required)"/> 

                <Input
                    onChange= {handleInputChange}
                    name="expiration"
                    value={paymentForm.expiration}
                    placeholder= "expiration date (required)"/> 
                <Input
                    onChange= {handleInputChange}
                    name="cvc"
                    value={paymentForm.cvc}
                    placeholder= "CVC Number (required)"/> 
                <Button
                    name="Submit"
                    placeholder="Submit"
                    onClick={handleFormSubmit}>Submit Payment</Button>
            </form>

            
        </div>
    )
}

export default withRouter(Payment);

