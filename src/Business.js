import React from "react";
import tofu from "./images/tofu.jpg"
import './Business.css';

const business = {
    image: tofu,
    name: 'business',
    address: 'address',
    city: 'city',
    state: 'state',
    zipcode: 'zip',
    category: 'category',
    rating: 'rating',
    reviewCount: 0
};

function Business() {


    return (
        <>
            <h1>I'm a business component!</h1>
            <p>{business.name}</p>
            <p>{business.reviewCount}</p>
            <img src={business.image} alt="fancy tofu" class="image"></img>

        </>)
}

export default Business;
