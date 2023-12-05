import React from "react";
import './BusinessList.module.css';
import Business from "../Business/Business";
import "../Business/Business.css"

export default function BusinessList() {
    return (
        <div className="businessComponent">
            <Business className="business" />
            <Business className="business" />
            <Business className="business" />
            <Business className="business" />
            <Business className="business" />
            <Business className="business" />


        </div>
    )
}