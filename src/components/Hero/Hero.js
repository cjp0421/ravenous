import React from "react";
import './Hero.css';
import SearchBar from "../SearchBar/SearchBar";


export default function Hero() {
    const searchYelp = (term, location, sortBy) => {
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    };
    return (
        <>
            <div className="hero">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar searchYelp={searchYelp} />
                </div>

            </div>
        </>
    )
}