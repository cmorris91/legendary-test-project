import React from "react";
import "./style.css";

export function Input (props){
    return (
        <div className="form-group">
             <input className="form-input" {...props} />
        </div>
    )
}

export function Button(props) {
    return(
        <button className="btn" {...props}></button>
    )
}