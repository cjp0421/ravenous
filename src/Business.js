import React from "react";
import tofu from "./images/tofu.jpg"
import './Business.css';

const business = {
    image: tofu,
    name: 'Soy-Lentil Greens',
    address: '123 Main Street',
    city: 'St. Chuck',
    state: 'MO',
    zipcode: '123456',
    category: 'Vegan Fusion',
    rating: 4.9,
    reviewCount: 16
};

function Business() {


    return (
        <>
            <div class="card" style={{ width: 200, margin: 10 }}>
                <img src={business.image} class="card-img-top" alt="fancy tofu"></img>
                <div class="card-body">
                    <h6 class="card-title">
                        {business.name}
                    </h6>
                    <p class="card-text">The place for soy, lentils, and greens. Bring your friends - it's the future of food!</p>
                    <div>
                        <div class="">
                            <p class="businessInfo">Address: </p>
                            <p class="businessInfo">{business.address}</p>
                            <p class="businessInfo">City: </p>
                            <p class="businessInfo">{business.city}</p>
                            <p class="businessInfo">State: </p>
                            <p class="businessInfo">{business.state}</p>
                            <p class="businessInfo">Zipcode: </p>
                            <p class="businessInfo">{business.zipcode}</p>
                            <p class="businessInfo">Category: </p>
                            <p class="businessInfo">{business.category}</p>
                            <p class="businessInfo">Rating: </p>
                            <p class="businessInfo">{business.rating}</p>
                        </div>
                    </div>
                    <a href="#" class="btn btn-success">Go to restaurant website!</a>
                </div>
            </div>


        </>)
}

export default Business;
