import CarCard from "./CarCard"

function ShowCars() {
    return (
        <div className="flex items-center justify-center gap-5 py-5">
            <CarCard />
            <CarCard />
            <CarCard />
        </div>
    )
}

export default ShowCars