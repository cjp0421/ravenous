import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function SearchBar() {

    const [message, setMessage] = useState();

    const handleChange = event => {
        setMessage(event.target.value);
    };

    console.log(message);


    return (
        <>
            <div className="searchBar">
                <form >
                    <input type="text" onChange={handleChange}></input>
                    <Button variant="light" value="submit">Search</Button>
                </form>

            </div>
        </>
    )
}