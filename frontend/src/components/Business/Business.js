
import './Business.css';

function Business({ businesses }) {
    const businessCards = businesses.map((business) => {
        return <div className="businessBackground" key={business.id}>
            <div className="card" >
                <img src={business.image_url} className="card-img-top" alt="Restaurant Provided"></img>
                <div className="card-body">
                    <h6 className="card-title">
                        {business.name}
                    </h6>
                    <p className="card-text">{business.description}</p>
                    <div>
                        <div className="">
                            <p className="businessInfo">Address: </p>
                            <p className="businessInfo">{business.location.address1}<br /> {business.location.city}, {business.location.state} {business.location.zip_code}</p>
                            <div className="d-flex categoryAndRatingInfo">
                                <p className="businessInfo">Category: <br />{business.categories[0].title}</p>
                                <p className="d-inline-flex">|</p>
                                <p className="businessInfo">Rating: <br />{business.rating}</p>
                            </div>
                        </div>
                    </div>
                    <a href={business.url} className="btn btn-success">Go to restaurant website!</a>
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
