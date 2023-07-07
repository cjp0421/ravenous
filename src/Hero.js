import React from "react";
import './Hero.css';
import SearchBar from "./SearchBar";


export default function Hero() {
    return (
        <>
            <div class="text-center" class="heroImage">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar />
                </div>



            </div>
        </>
    )
}