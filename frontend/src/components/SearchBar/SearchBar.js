import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

export default function SearchBar({ searchParams, setSearchParams }) {
    const [location, setLocation] = useState(searchParams.location || '');
    const [term, setTerm] = useState(searchParams.term || '');
    const [sort_by, setSort_by] = useState(searchParams.sort_by)

    const sort_byOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count",
    };


    const handlesort_byChange = (sort_byOptionValue) => {

        setSort_by(sort_byOptionValue)

        const updatedSearchParams = { ...searchParams, sort_by: sort_byOptionValue }
        console.log(searchParams)
        setSearchParams(updatedSearchParams)

    };



    const getsort_byClass = (sort_byOptionValue) => {
        return sort_by === sort_byOptionValue ? "active" : "inactive";
    };


    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const rendersort_byOptions = () => {
        return Object.keys(sort_byOptions).map((sort_byOption) => {
            let sort_byOptionValue = sort_byOptions[sort_byOption];

            return (
                <li
                    className={`sort-option ${getsort_byClass(sort_byOptionValue)}`}
                    key={sort_byOptionValue}
                    onClick={() => {
                        handlesort_byChange(sort_byOptionValue)
                    }}
                >
                    {sort_byOption}
                </li>
            );
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedSearchParams = { location, term, sort_by };
        setSearchParams(updatedSearchParams)
    };

    return (
        <>
            <div className="sorting-links">
                <div>
                    <ul >{rendersort_byOptions()}</ul>
                </div>
                <form>
                    <div className=''>
                        <input type="text" value={term} onChange={handleTermChange} placeholder="Search Businesses"></input>
                        <input type="text" value={location} onChange={handleLocationChange} placeholder="Search Places"></input>
                        <Button onClick={handleSubmit} variant="light" value="submit">Search</Button>
                    </div>
                </form>
            </div>
        </>
    )
}