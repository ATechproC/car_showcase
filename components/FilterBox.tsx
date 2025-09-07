"use client";

import { yearsOfProduction } from "../constants";
import { useInfoForm } from "contexts/InfoFormContext";

function FilterBox() {

    const { dispatch } = useInfoForm();

    function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch({
            type: "selected",
            payload: { value : e.target.value }
        }
        );
    }

    return (
        <div className="w-[100px]">
                    <select 
                    name="year" 
                    id="year"
                    className="py-2 text-gray-500 bg-gray-100 border-none rounded-md outline-none cursor-pointer w-[100px] text-md"
                        onChange={(e) => {
                            handleSelect(e)
                        }}
                        // className={`${showYearList} absolute top-10 z-10 bg-white max-h-[150px] empty:p-0 overflow-y-auto flex flex-col w-full gap-[3px] p-2 rounded-md mt-2 shadow-md`}
                    >
                        {yearsOfProduction.map(({ title, value}, index) => {
                            return (
                                <option
                                    key={index}
                                    className="cursor-pointer"
                                    value={value}
                                >
                                    {title}
                                </option>
                            );
                        })}
                    </select>
                </div>
    );
}

export default FilterBox;
