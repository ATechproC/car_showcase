"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type OverlayProps = {
    showLists : "hidden" | "block";
    setShowLists : Dispatch<SetStateAction<"hidden" | "block">>
}

const OverlayContext = createContext({} as OverlayProps)

export const OverlayProvider = ({children} : {children : React.ReactNode}) => {

    const [showLists, setShowLists] = useState<"block" | "hidden">("hidden");

    return <OverlayContext.Provider value={{showLists, setShowLists}}>
        {children}
    </OverlayContext.Provider>
}

export const useOverlay = () => {
    return useContext(OverlayContext)
}