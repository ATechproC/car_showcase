"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CarDetailsProps, ResultProps } from "types";
import { fetchCars } from "utils";

const CarDetailsContext = createContext({} as CarDetailsProps);

export const CarDetailsProvider = ({ children }: { children: React.ReactNode }) => {

    const [result, setResult] = useState({} as ResultProps);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCars();
                setResult(data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return <CarDetailsContext.Provider value={{ result }} >
        {children}
    </CarDetailsContext.Provider>
}

export const useCarDetails = () => {
    return useContext(CarDetailsContext);
}