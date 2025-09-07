
import SearchBar from "@components/SearchBar";
import ShowCars from "@components/ShowCars";

function CardContainer() {
    return (
        <div className="relative p-3">
            <SearchBar />
            <ShowCars />
        </div>
    );
}

export default CardContainer;
