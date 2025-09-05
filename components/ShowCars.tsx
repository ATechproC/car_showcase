import { useCarDetails } from "contexts/CarDetailsModal";
import CarCard from "./CarCard"
import Modal from "./Modal"

function ShowCars() {
    const { result } = useCarDetails();
    return (
        <div className="flex items-center justify-center gap-5 py-5">
            <Modal />
            <CarCard result={result} />
            <CarCard result={result} />
            <CarCard result={result} />
        </div>
    )
}

export default ShowCars