"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { CarDetailsProps, ProviderType, ResultProps } from "types";
import { fetchCars } from "utils";

const CarDetailsContext = createContext({} as CarDetailsProps);

export const CarDetailsProvider = ({ children }: ProviderType) => {

    const [result, setResult] = useState({} as ResultProps);

    const searchParams = useSearchParams();
    const manufacturer = searchParams.get("manufacturer");
    const model = searchParams.get("model");
    const year = searchParams.get("year");

    useEffect(() => {
        
        const fetchData = async (object : {make : string, model : string, year : string}) => {

            try {
                const data = await fetchCars(object);
                setResult(data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        // fetchData({model : "civic"});
        fetchData({
            make : manufacturer || "toyota",
            model : model || "corolla",
            year : year || "2023"
        });
    }, [manufacturer, model, year]);

    return <CarDetailsContext.Provider value={{ result }} >
        {children}
    </CarDetailsContext.Provider>
}

export const useCarDetails = () => {
    return useContext(CarDetailsContext);
}