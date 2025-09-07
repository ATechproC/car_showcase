"use client";

import { createContext, useContext, useReducer } from "react";
import { reducer } from "reducers/reducer";
import { FormProps } from "types";

const InfoFormContext = createContext({} as FormProps);

export const InfoFormProvider = ({ children }: { children: React.ReactNode }) => {

    const [inputValue, dispatch] = useReducer(reducer, {
        make: "",
        model: "",
        year: "",
    });

    return <InfoFormContext.Provider value={{dispatch, inputValue}}>
        {children}
    </InfoFormContext.Provider>
}

export const useInfoForm = () => {
    return useContext(InfoFormContext);
}