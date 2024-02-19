import React from "react";
import businesses from "../../data/fakeData";
import './Business.css';

function Business() {
    const businessCards = businesses.map((business) => {
        return <div className="businessBackground">
            <div className="card" style={{ width: 200, margin: 10 }}>
                <img src={business.image.imageUrl} className="card-img-top" alt={business.image.alt}></img>
                <div className="card-body">
                    <h6 className="card-title">
                        {business.name}
                    </h6>
                    <p className="card-text">{businesses[0].description}</p>
                    <div>
                        <div className="">
                            <p className="businessInfo">Address: </p>
                            <p className="businessInfo">{business.address}<br /> {business.city}, {business.state} {business.zipcode}</p>
                            <div className="d-flex categoryAndRatingInfo">
                                <p className="businessInfo">Category: <br />{business.category}</p>
                                <p className="d-inline-flex">|</p>
                                <p className="businessInfo">Rating: <br />{business.rating}</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-success">Go to restaurant website!</a>
                </div>
            </div>
        </div>
    })

    return (
        <>

            {businessCards}


        </>)
}

export default Business;
