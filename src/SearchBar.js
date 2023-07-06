import React, { useState } from "react";

export default function SearchBar() {

    return (
        <>
            <div className="searchBar">
                <form className="d-flex">
                    <input type="search" placeholder="Search City" aria-label="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>

            </div>
        </>
    )
}