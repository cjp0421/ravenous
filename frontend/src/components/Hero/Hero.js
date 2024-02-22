import './Hero.css';
import SearchBar from "../SearchBar/SearchBar";


export default function Hero({ handleSearch, setTerm, setLocation, setSortBy }) {


    return (
        <>
            <div className="hero">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar setTerm={setTerm} setLocation={setLocation} setSortBy={setSortBy} searchYelp={handleSearch} />

                </div>

            </div>
        </>
    )
}