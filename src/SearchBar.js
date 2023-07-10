import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Business.css'

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

export default function SearchBar() {

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOption}>{sortByOption}</li>;
        });
    };


    const [message, setMessage] = useState();

    const handleChange = event => {
        setMessage(event.target.value);
    };

    console.log(message);


    return (
        <>
            <div className="searchBar">
                <form >
                    <input type="text" onChange={handleChange} placeholder="Search Businesses"></input>
                    <input type="text" onChange={handleChange} placeholder="Search Places"></input>
                    <Button variant="light" value="submit">Search</Button>
                </form>
                <div>
                    <ul>{renderSortByOptions()}</ul>
                </div>

            </div>
        </>
    )
}