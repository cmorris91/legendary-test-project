import React from "react";


export function Input (props){
    return (
        <div className="form-group">
             <input className="form-input" {...props} />
        </div>
    )
}

export function Button(props) {
    return(
        <button {...props}></button>
    )
}