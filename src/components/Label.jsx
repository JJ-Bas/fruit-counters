import React from "react";

export function Label({labelText, lType}) {
    return (
        <span className="label-span">
            <label>{labelText}</label>
    <input type={lType}/>
        </span>
    )
}