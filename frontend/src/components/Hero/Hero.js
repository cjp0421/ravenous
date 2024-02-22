import './Hero.css';
import SearchBar from "../SearchBar/SearchBar";


export default function Hero({ setTerm, setLocation, setSortBy, fetchData }) {

    const onSearchClick = async () => {
        await fetchData()
    }
    return (
        <>
            <div className="hero">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar setTerm={setTerm} setLocation={setLocation} setSortBy={setSortBy} searchYelp={onSearchClick} />

                </div>

            </div>
        </>
    )
}