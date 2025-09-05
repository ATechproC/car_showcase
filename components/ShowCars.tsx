import CarCard from "./CarCard"
import Modal from "./Modal"

function ShowCars() {
    return (
        <div className="flex items-center justify-center gap-5 py-5">
            <Modal />
            <CarCard />
            <CarCard />
            <CarCard />
        </div>
    )
}

export default ShowCars