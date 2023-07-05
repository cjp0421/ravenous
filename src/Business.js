import React from "react";

const business = {
    image: 'image',
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
        </>)
}

export default Business;
