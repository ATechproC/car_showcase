"use client";

import { useState } from "react";
import { yearsOfProduction } from "../constants";
import { useInfoForm } from "contexts/InfoFormContext";

function FilterBox() {
    const [showYearList, setShowYearList] = useState<"hidden" | "block">(
        "hidden"
    );

    const { inputValue, dispatch } = useInfoForm();

    function handleClick(id: number) {
        dispatch({ type: "handleProduction", 
            payload: { yearsOfProduction, id } }
        );
        setShowYearList("hidden");
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "changed", 
            payload: { value: event.target.value } }
        );
    };

    return (
        <div className="flex items-center gap-1">
            <div className="relative">
                <input
                    value={inputValue.year || "2023"}
                    onChange={(e) => handleChange(e)}
                    onFocus={() => setShowYearList("block")}
                    className="w-[100px] font-semibold relative z-10 p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                    placeholder="Year"
                />
                <div
                    className={`${showYearList} absolute top-10 z-10 bg-white max-h-[150px] empty:p-0 overflow-y-auto flex flex-col w-full gap-[3px] p-2 rounded-md mt-2 shadow-md`}
                >
                    {yearsOfProduction.map(({ title, id }, index) => {
                        return (
                            <div
                                onClick={() => handleClick(id)}
                                className="text-sm text-gray-500 p-[2px_3px] rounded-md  hover:bg-[#0065F8] hover:text-white cursor-pointer"
                                key={index}
                            >
                                {" "}
                                {title}{" "}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

//

export default FilterBox;
