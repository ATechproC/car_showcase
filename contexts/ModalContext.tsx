"use client";

import { useState, Dispatch, SetStateAction, useContext, createContext, useEffect } from "react";

type ModalProps = {
    modal: string;
    setModal: Dispatch<SetStateAction<"block" | "hidden">>;
}

const ModalContext = createContext({} as ModalProps);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState<"block" | "hidden">("hidden");

    return <ModalContext.Provider value={{ modal, setModal }} >
        {children}
    </ModalContext.Provider>
}

export function useModal() {
    const context = useContext(ModalContext);

    return context;
}