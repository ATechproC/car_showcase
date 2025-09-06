"use client";

import SearchBar from "@components/SearchBar";
import ShowCars from "@components/ShowCars";
import { useOverlay } from "contexts/OverlayContext";

function CardContainer() {
    const { setShowLists, showLists } = useOverlay();

    return (
        <div className="relative">
            <div onClick={() => setShowLists('hidden')} className={`${showLists} absolute z-10 top-0 left-0 w-[100%] h-[100%]`}></div>
            {/* <div className="flex items-center gap-2">
            </div> */}
                <SearchBar />
            <ShowCars />
        </div>
    )
}

export default CardContainer