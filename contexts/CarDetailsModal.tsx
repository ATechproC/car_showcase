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

    useEffect(() => {
        
        const fetchData = async (object : {make : string, model : string}) => {

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
            model : model || "corolla"
        });
    }, [manufacturer, model]);

    return <CarDetailsContext.Provider value={{ result }} >
        {children}
    </CarDetailsContext.Provider>
}

export const useCarDetails = () => {
    return useContext(CarDetailsContext);
}