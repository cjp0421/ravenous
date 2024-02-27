import './Hero.css';
import SearchBar from "../SearchBar/SearchBar";


export default function Hero({ onSearch }) {


    return (
        <>
            <div className="hero">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar onSearch={onSearch} />

                </div>

            </div>
        </>
    )
}