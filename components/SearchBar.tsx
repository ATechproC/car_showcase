"use client";

import React, { useState } from "react";
import { manufacturers } from "../constants/index";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOverlay } from "contexts/OverlayContext";

const SearchBar = () => {
    const router = useRouter();

    const {showList, setShowList} = useOverlay();

    const [inputValue, setInputValue] = useState({
        make: "",
        model: "",
    });

    // const [showList, setShowList] = useState<"block" | "hidden">("hidden");

    let listManufacturers: {
        id: number;
        name: string;
    }[] = [];

    const newName = inputValue.make.toLowerCase().trim();

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
        for (let i = 0; i < listManufacturers.length; i++) {
            if (listManufacturers[i].id === id) {
                let newName = [];
                for (let j = 0; j < listManufacturers[i].name.length; j++) {
                    if (j === 0) newName[j] = listManufacturers[i].name[j].toUpperCase();
                    else newName[j] = listManufacturers[i].name[j].toLowerCase();
                }
                setInputValue({
                    ...inputValue,
                    make: newName.join(""),
                });
            }
        }
        setShowList("hidden");
    }

    // function handleBlur() {
    //     if(inputValue !== "") {
    //         setShowList("hidden")
    //     }
    // }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.make === "" && inputValue.model === "") {
            alert("Please choose a car model");
        } else {
            getModel();
        }
    };

    const getModel = () => {
        router.push(
            `?manufacturer=${inputValue.make.toLowerCase()}&model=${inputValue.model.toLowerCase()}`
        );
    };

    return (
        <>
        {/* <div onClick={() => setShowList('hidden')}  className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        <form className="w-[610px] p-2" onSubmit={handleSubmit}>
            <div className="relative flex items-center gap-[2px]">
                <input
                    value={inputValue.make}
                    // onBlur={handleBlur}
                    onFocus={() => setShowList("block")}
                    onChange={(e) => {
                        setInputValue({
                            ...inputValue,
                            make: e.target.value,
                        });
                    }}
                    className="w-[100%] p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                    placeholder="search for the manufacturer"
                />
                <input
                    value={inputValue.model}
                    onChange={(e) => {
                        setInputValue({
                            ...inputValue,
                            model: e.target.value,
                        });
                    }}
                    className="w-[100%] p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                    placeholder="search for the model"
                />
                <button type="submit">
                    <span className="absolute cursor-pointer top-[50%] -translate-y-[50%] right-1">
                        <Image
                            src={"./magnifying-glass.svg"}
                            alt=""
                            width={27}
                            height={27}
                        />
                    </span>
                </button>
            </div>
            <div className={`${showList} relative z-10 w-[50%]`}>
                <ul className="max-h-[150px] empty:p-0 overflow-y-auto flex flex-col w-full gap-[3px] p-2 rounded-md mt-2 shadow-md">
                    {listManufacturers.map(({ id, name }) => {
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
        </form>
        </>
    );
};

export default SearchBar;
