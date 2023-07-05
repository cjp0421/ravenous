import React from "react";
import tofu from "./images/tofu.jpg"
import './Business.css';

const business = {
    image: tofu,
    name: 'Soy-Lentil Greens',
    address: '123 Main Street',
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
            <div class="card" style={{ width: 180 }}>
                <img src={business.image} class="card-img-top" alt="fancy tofu"></img>
                <div class="card-body">
                    <h6 class="card-title">
                        {business.name}
                    </h6>
                    <p class="card-text">The place for soy, lentils, and greens. Bring your friends - it's the future of food!</p>
                    <a href="#" class="btn btn-success">Go to restaurant website!</a>
                </div>
            </div>


        </>)
}

export default Business;
