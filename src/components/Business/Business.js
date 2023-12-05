import React from "react";
import tofu from "../../images/tofu.jpg"
import cuttingBoard from "../../images/foodbanner.jpg"

import './Business.css';

const businesses = [{
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
},
{
    image: {
        imageUrl: cuttingBoard,
        imageAlt: "discount tofu"
    },
    name: 'CopyKelp Greens',
    address: '125 Main Street',
    city: 'St. Chuck',
    state: 'MO',
    zipcode: '123456',
    category: 'Vegan Fusion',
    rating: 3.9,
    reviewCount: 6,
    description: 'The CHEAPER place for soy, lentils, and greens. Bring your friends - it\'s the future of food!'
}];

function Business() {


    return (
        <>
            <div class="card" style={{ width: 200, margin: 10 }}>
                <img src={businesses[0].image.imageUrl} className="card-img-top" alt={businesses[0].image.alt}></img>
                <div className="card-body">
                    <h6 className="card-title">
                        {businesses[0].name}
                    </h6>
                    <p class="card-text">{businesses[0].description}</p>
                    <div>
                        <div class="">
                            <p className="businessInfo">Address: </p>
                            <p className="businessInfo">{businesses[0].address}<br /> {businesses[0].city}, {businesses[0].state} {businesses[0].zipcode}</p>
                            <div className="d-flex" className="categoryAndRatingInfo">
                                <p className="businessInfo">Category: <br />{businesses[0].category}</p>
                                <p className="d-inline-flex">|</p>
                                <p className="businessInfo">Rating: <br />{businesses[0].rating}</p>

                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-success">Go to restaurant website!</a>
                </div>
            </div>


        </>)
}

export default Business;
