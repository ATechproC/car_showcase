"use client";

import { useCarDetails } from "contexts/CarDetailsModal";
import CarCard from "./CarCard";

function ShowCars() {
    const { result } = useCarDetails();

    let results = [];

    for (let i = 0; i < 6; i++) {
        results[i] = result;
    }

    return (
        <div className="flex flex-col flex-wrap items-center justify-center gap-6 py-5 md:flex-row">
            {results.map((result, index) => {
                return <CarCard key={index} result={result} />;
            })}
        </div>
    );
}

export default ShowCars;
