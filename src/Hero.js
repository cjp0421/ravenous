import React from "react";
import './Hero.css';


export default function Hero() {
    return (
        <>
            <div class="text-center" class="heroImage">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <form class="d-flex">
                        <input type="search" placeholder="Search Keyword" aria-label="Search" />
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>

                </div>

                <div className="searchBar">
                    <form class="d-flex">
                        <input type="search" placeholder="Search City" aria-label="Search" />
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>

                </div>

            </div>
        </>
    )
}