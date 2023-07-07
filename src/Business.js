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
                <img src={business.image} className="card-img-top" alt="fancy tofu"></img>
                <div class="card-body">
                    <h6 className="card-title">
                        {business.name}
                    </h6>
                    <p class="card-text">The place for soy, lentils, and greens. Bring your friends - it's the future of food!</p>
                    <div>
                        <div class="">
                            <p className="businessInfo">Address: </p>
                            <p className="businessInfo">{business.address}<br /> {business.city}, {business.state} {business.zipcode}</p>
                            <div className="d-flex" className="categoryAndRatingInfo">
                                <p className="businessInfo">Category: <br />{business.category}</p>

                                <p className="businessInfo">Rating: <br />{business.rating}</p>

                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-success">Go to restaurant website!</a>
                </div>
            </div>


        </>)
}

export default Business;
