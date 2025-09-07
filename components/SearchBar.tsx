"use client";

import React from "react";
import { manufacturers } from "../constants/index";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FilterBox from "./FilterBox";
import { ListManufacturersProps } from "types";
import { useInfoForm } from "contexts/InfoFormContext";
import { useOverlay } from "contexts/OverlayContext";

const SearchBar = () => {

    const { showList, setShowList } = useOverlay();

    const router = useRouter();

    const { inputValue, dispatch } = useInfoForm();

    let listManufacturers: ListManufacturersProps[] = [];

    (function ListManufacturers() {
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
    })();


    function handleClick(id: number) {
        dispatch({
            type: "handled", payload: {
                listManufacturers, id
            }
        })
        setShowList("hidden");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            inputValue.make === "" ||
            inputValue.model === "" ||
            inputValue.year === "" ||
            +inputValue.year > 2023 ||
            +inputValue.year < 2015
        ) {
            alert("⚠️ Please fill in all fields !!");
        } else {
            getModel();
        }
    };

    const getModel = () => {
        router.push(
            `?manufacturer=${inputValue.make.toLowerCase()}&model=${inputValue.model.toLowerCase()}&year=${inputValue.year || 2023}`);
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>
    ) {
        dispatch({ type: "changed", payload: { value: event.target.value } });
    }

    function handleChangeModel(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "changedModel", payload: { value: event.target.value } })
    }

    return (
        <>
            <form id="cars"
                className="w-[90%] p-2 m-auto scroll-mt-[250px] md:scroll-mt-[65px]" onSubmit={handleSubmit}>
                <div className="relative flex flex-col md:flex-row sm:items-center gap-2 md:gap-[2px]">
                    <input
                        value={inputValue.make}
                        onFocus={() => {
                            setShowList("block");
                        }}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        className="w-[100%] z-10 p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                        placeholder="search for the manufacturer"
                    />
                    <input
                        value={inputValue.model}
                        onChange={(e) => {
                            handleChangeModel(e);
                        }}
                        className="w-[100%] z-10 p-2 text-slate-400 bg-gray-100 rounded-md outline-none focus:border focus:border-gray-500"
                        placeholder="search for the model"
                    />
                    <div className="flex items-center justify-between">
                        <FilterBox />
                        <button className="px-3 py-1 text-white bg-[#0065F8] cursor-pointer rounded-lg md:hidden" type="submit">
                            Search
                        </button>
                    </div>
                    <button type="submit" className="hidden md:block"
                    >
                        <span className="grid place-items-center h-full absolute bg-gray-100 cursor-pointer z-10 top-[50%] -translate-y-[50%] -right-7 ">
                            <Image
                                src={"./magnifying-glass.svg"}
                                alt=""
                                width={27}
                                height={27}
                            />
                        </span>
                    </button>
                </div>

                <div className={`${showList} relative z-10 p-3`}>
                    <div 
                    onClick={() => setShowList('hidden')}
                    className={`${showList} absolute md:top-0 bottom-[170px] -left-[39px] md:-left-[65px] w-screen h-[160px]`}
                    >
                        <ul
                        className="max-h-[150px] bottom-0 md:top-0 absolute h-fit left-[39px] md:left-[65px] z-10 bg-white empty:p-0 overflow-y-auto flex flex-col w-[50%] gap-[3px] p-2 rounded-md mt-1 shadow-md">
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
                </div>
            </form>
        </>
    );
};

export default SearchBar;
