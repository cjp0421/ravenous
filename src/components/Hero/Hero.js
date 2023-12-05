import React from "react";
import './Hero.css';
import SearchBar from "../SearchBar/SearchBar";


export default function Hero() {
    return (
        <>
            <div className="hero">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar />
                </div>



            </div>
        </>
    )
}