import './BusinessList.module.css';
import Business from "../Business/Business";
// import businesses from "../../data/fakeData";
// import useYelpApi from '../../utils/useYelpApi';
import "../Business/Business.css"




export default function BusinessList({ response, error, loading }) {

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Error: {error.message}</h2>
    }

    return (
        <div className="businessComponent">
            <Business className="business" businesses={response && response.businesses ? response.businesses : []} />
        </div>
    );
}