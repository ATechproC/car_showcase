"use client";

import { createContext,useContext, useState } from "react";
import { OverlayProps } from "types";

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