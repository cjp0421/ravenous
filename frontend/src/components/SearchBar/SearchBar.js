import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import '../Business/Business.css';
import styles from './styles.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};


export default function SearchBar({ sortBy, setSortBy, searchParams, setSearchParams }) {
    const [location, setLocation] = useState(searchParams.location || '');
    const [term, setTerm] = useState(searchParams.term || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedSearchParams = { term, location };
        setSearchParams(updatedSearchParams)
    };

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

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => {
                        handleSortByChange(sortByOptions[sortByOptionValue])
                    }}
                >
                    {sortByOption}
                </li>
            );
        });
    };

    return (
        <>
            <div className="searchBar">
                <div className={styles.SearchBarSortOptions}>
                    <ul>{renderSortByOptions()}</ul>
                </div>
                <form>
                    <div className={styles.SearchBarFields}>
                        <input type="text" value={term} onChange={handleTermChange} placeholder="Search Businesses"></input>
                        <input type="text" value={location} onChange={handleLocationChange} placeholder="Search Places"></input>
                        <Button onClick={handleSubmit} variant="light" value="submit">Search</Button>
                    </div>
                </form>
            </div>
        </>
    )
}