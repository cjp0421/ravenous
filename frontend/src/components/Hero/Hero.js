import './Hero.css';
import SearchBar from "../SearchBar/SearchBar";


export default function Hero({ searchParams, setSearchParams }) {


    return (
        <>
            <div className="hero">

                <h1>ravenous</h1>
                <div className="searchBar">
                    <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />

                </div>

            </div>
        </>
    )
}