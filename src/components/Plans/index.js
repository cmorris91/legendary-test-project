import React, { useState } from "react";
import {Button} from "../Forms";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

function Plans() {
    return(
        <div className="row planContainer">
            <div className="col sm={7} planBoxes">
                <h1>Our Plans</h1>
                <div className="row">
                <div className="col box">
                    <h1>Lite</h1>
                    <p>- Lorem ipsum dolor</p>
                    <p>- Lorem ipsum dolor</p>
                    <p>- Lorem ipsum dolor</p>
                    <p style={{fontSize: "3rem"}}>XX.99</p>
                    <p>Per Year</p>
                    <button>Choose</button>
                </div>
                <div className="col box">
                    <h1>Basic</h1>
                    <p>- Lorem ipsum dolor</p>
                    <p>- Lorem ipsum dolor</p>
                    <p>- Lorem ipsum dolor</p>
                    <p style={{fontSize: "3rem"}}>XX.99</p>
                    <p>Per Year</p>
                    <button>Choose</button>
                </div>
                <div className="col box">
                    <h1>Expert</h1>
                    <p>- Lorem ipsum dolor</p>
                    <p>- Lorem ipsum dolor</p>
                    <p>- Lorem ipsum dolor</p>
                    <p style={{fontSize: "3rem"}}>XX.99</p>
                    <p>Per Year</p>
                    <button>Choose</button>
                </div>
                </div>
                <div className="cancel">
                    <Link to={"/"} className="cancelBtn">
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
            <div className="col sm={5} planText">
                <div className="textBox">
                    <h1>Now, let's choose a plan for your collection!</h1>
                    <p>The following are the applicable Legendary Collections subscriptions that are currently available.
                        Please select the one you would like and proceed to the payment page.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Plans);