import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import '../Business/Business.css';
import styles from './styles.css';
// import useYelpApi from "../../utils/useYelpApi";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};


export default function SearchBar({ sortBy, setSortBy, onSearch }) {
    const [location, setLocation] = useState('');
    const [term, setTerm] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        await onSearch(location, term)
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
                <form onSubmit={handleSubmit}>
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