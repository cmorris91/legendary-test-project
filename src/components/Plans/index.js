import React, { useState, useEffect } from "react";
import {Button} from "../Forms";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

function Plans() {
    const [planObject, setPlanObject] = useState({});
    const [error, setError] = useState(null);
    const [isBusy, setBusy] = useState(true)
    
    //API to get the plan information 
    useEffect(() => {
        fetch("https://api-test.legendaryapplications.com/action/getproducts")
          .then(res => res.json())
          .then(
            (result) => {
                setPlanObject({result})
                setBusy(false)
            },
            (error) => {
                setError(error);
            })
      },[])

    console.log(planObject.result)

      if (error) {
        return <div>Error</div>;
      } else  {
        
        //having trouble figuring out the syntax to renderthe planObject items onto the page
        //the plan information is currently commented out
          return(
              <div>
              {isBusy ? (
                  <div></div>
              ) : (
              <div className="row planContainer">
                    <div className="col sm={7} planBoxes">
                        <h1>Our Plans</h1>
                        <div className="row">
                        <div className="col box">
                            <h1>{planObject.result[0].name + ''}</h1> 
                            <p>{planObject.result[0].description}</p>
                            <p style={{fontSize: "3rem"}}>{planObject.result[0].price}</p>
                        <p>Every {planObject.result[0].subscriptionLength} Days</p>
                            <Link to={"/Payment"}>
                            <button>Choose</button>
                            </Link>
                        </div>
                        <div className="col box">
                            <h1>{planObject.result[1].name}</h1>
                            <p>{planObject.result[1].description}</p>
                            <p style={{fontSize: "3rem"}}>{planObject.result[1].price}</p>
                        <p>Every {planObject.result[1].subscriptionLength} Days</p>
                            <Link to={"/Payment"}>
                            <button>Choose</button>
                            </Link>
                        </div>
                        <div className="col box">
                             <h1>{planObject.result[2].name}</h1>
                            <p>{planObject.result[2].description}</p>
                            <p style={{fontSize: "3rem"}}>{planObject.result[2].price}</p>
                        <p>Every {planObject.result[2].subscriptionLength} Days</p>
                            <Link to={"/Payment"}>
                            <button>Choose</button>
                            </Link>
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
                )}
            </div>
            )
            
        }

        
};

export default withRouter(Plans);