import React from "react";
import './Hero.css';
import SearchBar from "./SearchBar";


export default function Hero() {
    return (
        <>
            <div class="text-center" class="heroImage">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <form className="d-flex">
                        <input type="search" placeholder="Search Keyword" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>

                </div>

                <SearchBar />

            </div>
        </>
    )
}