import React from "react";
import './Hero.css';
import logo from './images/chillipepper.jpg';

export default function Hero() {
    return (
        <>
            <div class="text-center" class="heroImage">
                <img src={logo} class="image" alt="background image" />
                <h1>ravenous</h1>
            </div>
        </>
    )
}