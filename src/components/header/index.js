import React from "react";
import "./style.css";

function Header() {
    return (
        <div>
            <div className=" header">
                <div>
                    <p className="title"><strong>Legendary</strong> Collections</p>
                    <p className="title2">The Organized Collector's App</p>
                </div>
                <div className="header-btn">
                    <p><button>Send Feedback</button></p>
                    <p><button>Learn More</button></p>
                </div>
            </div>
        </div>
    )
};

export default Header;