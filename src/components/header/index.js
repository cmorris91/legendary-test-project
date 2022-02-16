import React from "react";
import "./style.css";

function Header() {
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col header">
                <div className="row empty">
                    <div className="col titleBox">
                        <div>
                        <p className="title"><strong>Legendary</strong> Collections</p>
                        <p className="title2">The Organized Collector's App</p>
                        </div>
                    </div>
                    <div className=" col header-btn">
                        <p><button>Send Feedback</button></p>
                        <p><button>Learn More</button></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Header;