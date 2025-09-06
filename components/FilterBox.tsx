"use client";

import { Dispatch, useState } from "react"
import { yearsOfProduction } from "../constants"
import { useOverlay } from "contexts/OverlayContext";

type FilterBoxProps = {
    value: {
        make: string;
        model: string;
        year: string;
    }
    setValue: Dispatch<React.SetStateAction<{
        make: string;
        model: string;
        year: string;
    }>>
}

function FilterBox({ value, setValue }: FilterBoxProps) {

    const { showLists } = useOverlay();

    const [showYearList, setShowYearList] = useState<"hidden" | "block">("hidden");


    // const [inputValues, setInputValues] = useState("");

    function handleClick(id: number, type: string) {
        if (type === "year") {
            for (let i = 0; i < yearsOfProduction.length; i++) {
                if (yearsOfProduction[i].id === id) {
                    setValue({
                        ...value, year: yearsOfProduction[i].value
                    });
                }
            }
            setShowYearList("hidden");
        }
    }

    return (
        <div className="flex items-center gap-1">
            <div className="relative">
                <input
                    value={value.year || "2023"}
                    onChange={(e) => setValue({
                        ...value, year: e.target.value
                    })}
                    onFocus={() => setShowYearList("block")}
                    className="w-[100px] font-semibold relative z-10 p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                    placeholder="Year" />
                <div className={`${showYearList} absolute top-10 z-10 bg-white max-h-[150px] empty:p-0 overflow-y-auto flex flex-col w-full gap-[3px] p-2 rounded-md mt-2 shadow-md`}>
                    {yearsOfProduction.map(({ title, id }, index) => {
                        return <div
                            onClick={() => handleClick(id, "year")}
                            className="text-sm text-gray-500 p-[2px_3px] rounded-md  hover:bg-[#0065F8] hover:text-white cursor-pointer"
                            key={index}> {title} </div>
                    })}
                </div>
            </div>
        </div>
    )
}

//                 


export default FilterBox