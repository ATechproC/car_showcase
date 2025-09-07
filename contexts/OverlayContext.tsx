"use client";

import { createContext,useContext, useState } from "react";
import { OverlayProps } from "types";

const OverlayContext = createContext({} as OverlayProps)

export const OverlayProvider = ({children} : {children : React.ReactNode}) => {

        const [showList, setShowList] = useState<"block" | "hidden">("hidden");

    return <OverlayContext.Provider value={{showList, setShowList}}>
        {children}
    </OverlayContext.Provider>
}

export const useOverlay = () => {
    return useContext(OverlayContext)
}