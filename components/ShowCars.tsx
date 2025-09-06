import { useCarDetails } from "contexts/CarDetailsModal";
import CarCard from "./CarCard"

function ShowCars() {
    const { result } = useCarDetails();
    return (
        <div className="flex flex-col items-center justify-center gap-5 py-5 md:flex-row">
            <CarCard result={result} />
            <CarCard result={result} />
            <CarCard result={result} />
        </div>
    )
}

export default ShowCars