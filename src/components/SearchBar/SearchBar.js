import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import '../Business/Business.css';
import styles from './styles.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

export default function SearchBar({ searchYelp }) {
    // const [message, setMessage] = useState();
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const getSortByClass = (sortByOption) => {
        if (sortBy === sortByOption) {
            return styles.active;
        }
        return "";
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        searchYelp(term, location, sortBy);
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => {
                        handleSortByChange(sortByOptionValue)
                    }}
                >
                    {sortByOption}
                </li>
            );
        });
    };




    // const handleChange = event => {
    //     setMessage(event.target.value);
    // };

    // console.log(message);


    return (
        <>
            <div className="searchBar">
                <div className={styles.SearchBarSortOptions}>
                    <ul>{renderSortByOptions()}</ul>
                </div>
                <form onSubmit={handleSearch}>
                    <div className={styles.SearchBarFields}>
                        <input type="text" onChange={handleTermChange} placeholder="Search Businesses"></input>
                        <input type="text" onChange={handleLocationChange} placeholder="Search Places"></input>
                        <Button variant="light" value="submit">Search</Button>
                    </div>
                </form>
            </div>
        </>
    )
}