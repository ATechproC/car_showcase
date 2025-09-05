"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type OverlayProps = {
    showList : "hidden" | "block";
    setShowList : Dispatch<SetStateAction<"hidden" | "block">>
}

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