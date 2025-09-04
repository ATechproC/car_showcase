"use client";

import { useState } from "react";
import { manufacturers } from "../constants/index";

const SearchBar = () => {

    const [inputValue, setInputValue] = useState<string>("");

    const [showList, setShowList] = useState<"block" | "hidden">("hidden");

    let listManufacturers: {
        id : number,
        name : string,
    }[] = [];

    const newName = inputValue.toLowerCase().trim();

    for (let i = 0; i < manufacturers.length; i++) {
        if (newName !== "") {
            if (manufacturers[i].name.toLowerCase().includes(newName)) {
                listManufacturers[listManufacturers.length] = manufacturers[i];
            }
        } else {
            listManufacturers = manufacturers;
        }
    }

    function handleClick(id: number) {
        for(let i = 0; i < listManufacturers.length; i++) {
            if(listManufacturers[i].id === id) {
                setInputValue(listManufacturers[i].name);      
            }
        }
        setShowList("hidden");
    }

    function handleBlur() {
        if(inputValue !== "") {
            setShowList("hidden")
        }
    }

    return (
        <div className="w-[300px] p-2" >
            <input
                value={inputValue}
                onBlur={handleBlur}
                onFocus={() => setShowList("block")}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                className="w-[100%] p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                placeholder="search for your dream car"
            />
            <div className={`${showList}`}>
                <ul  className="max-h-[150px] empty:p-0 overflow-y-auto flex flex-col w-full gap-[3px] p-2 rounded-md mt-2 shadow-md">
                    {listManufacturers.map(({id , name}) => {
                        return (
                            <li 
                                key={id}
                                className="text-sm text-gray-500 p-[2px_3px] rounded-md  hover:bg-[#0065F8] hover:text-white cursor-pointer"
                                onClick={() => handleClick(id)}
                            >
                                {name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;
