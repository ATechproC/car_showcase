"use client";

import SearchBar from "@components/SearchBar";
import ShowCars from "@components/ShowCars";
import { useOverlay } from "contexts/OverlayContext";

function CardContainer() {
    const { setShowList } = useOverlay();

    return (
        <div className="relative">
            <div onClick={() => setShowList('hidden')} className="absolute top-0 left-0 w-[100%] h-[100%]"></div>
            <SearchBar />
            <ShowCars />
        </div>
    )
}

export default CardContainer