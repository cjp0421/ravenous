import React from "react";
import Business from "./Business";
import "./Business.css"

export default function BusinessList() {
    return (
        <div className="businessComponent">
            <Business className="business" />
            <Business className="business" />
            <Business className="business" />


        </div>
    )
}