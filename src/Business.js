import React from "react";
import tofu from "./images/tofu.jpg"
import './Business.css';

const business = {
    image: {
        imageUrl: tofu,
        imageAlt: "fancy tofu"
    },
    name: 'Soy-Lentil Greens',
    address: '123 Main Street',
    city: 'St. Chuck',
    state: 'MO',
    zipcode: '123456',
    category: 'Vegan Fusion',
    rating: 4.9,
    reviewCount: 16,
    description: 'The place for soy, lentils, and greens. Bring your friends - it\'s the future of food!'
};

function Business() {


    return (
        <>
            <div class="card" style={{ width: 200, margin: 10 }}>
                <img src={business.image.imageUrl} className="card-img-top" alt={business.image.alt}></img>
                <div className="card-body">
                    <h6 className="card-title">
                        {business.name}
                    </h6>
                    <p class="card-text">{business.description}</p>
                    <div>
                        <div class="">
                            <p className="businessInfo">Address: </p>
                            <p className="businessInfo">{business.address}<br /> {business.city}, {business.state} {business.zipcode}</p>
                            <div className="d-flex" className="categoryAndRatingInfo">
                                <p className="businessInfo">Category: <br />{business.category}</p>
                                <p className="d-inline-flex">|</p>
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
