import React, { useState, useEffect } from "react";
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

    const [discountCode, setDiscountCode] = useState({
        code: "",
        data: "",
        success: "",
    });

    const [start, setStart] = useState(false);

    //api post call for discount code entered
    useEffect (() => {
        const validate = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: discountCode.code })
        };
        fetch('https://api-test.legendaryapplications.com/action/promos/check', validate)
            .then(response => response.json())
            .then(data => setDiscountCode({...discountCode, success: data.success}));
            
    }, [start]);

    console.log(discountCode.success);

    //function to check if code the user entered was successful
    function message() {
        setTimeout(function() {
            if (discountCode.success== true) {
                alert("Dicount Applied!");
            } else {
                alert("Code wasn't accepted");
            }
          }, 3000);
    };

    //function that handles user input of card information
    function handleInputChange(event) {
        const { name, value } = event.target;
        setPaymentForm({...paymentForm, [name]: value})
      };

    //function that handles user input of discount code
    function handleInputChange2(event) {
        const { name, value } = event.target;
        setDiscountCode({...discountCode, [name]: value})
      };

    //function to save card info to local storage
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

    //onclick event that submits api call, updates state and supposed to alert user if discount code worked
    function handleFormSubmit2(e) {
        const promise = new Promise((resolve) => {
            e.preventDefault();
            setStart(true);
            resolve();
          })
          promise.then(message())
 
    };

    return (
        <div className="row ">
            <div className="col">
                <div className="cardBox">
                    <h1>Enter Payment Information</h1>
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
                <div className="cardBox">
                    <h1>Enter Discount Code</h1>
                    <form>
                        <Input
                        onChange= {handleInputChange2}
                        name="code"
                        value={discountCode.code}
                        placeholder= "enter discount code"/> 
                        <Button
                        name="Submit"
                        placeholder="Submit"
                        onClick={handleFormSubmit2}>Submit</Button>
                    </form>
                </div>
            </div>
            <div className="col paymentText">
                <div className="textBox">
                    <h1>Almost There!</h1>
                    <p>Enter your required payment information and you'll be on you're way to happ collecting!</p>
                </div>
            </div>
        </div>
    )
    
}

export default withRouter(Payment);

 // fetch('https://api-test.legendaryapplications.com/action/promos/check', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //       body: JSON.stringify({ code: discountCode.code })
        //     })
        //       .then(data => {
        //         //console.log(validate)
        //         setDiscountCode({...discountCode, data: data.json()})
        //         console.log(discountCode.data)
        //       })
        //       .catch (err => {
        //           console.log(err)
        //       })
