"use client";

import Image from "next/image";
import { useCarDetails } from "contexts/CarDetailsModal";
import { generateCarImageUrl } from "utils";

function CarDetails() {
    const { result } = useCarDetails();

    const keysValues: [string, string][] = Object.entries(result);

    const imageList: { id: number; angle: string }[] = [
        { id: 1, angle: "" },
        { id: 2, angle: "33" },
        { id: 3, angle: "13" },
    ];

    return (
        <div className="transition-all duration-300 ease-in-out">
            <div className="p-3 rounded-lg w-[60%] mx-auto mt-20 bg-sky-400">
                <div className="relative w-full p-2 h-[100px]">
                    <div className="absolute top-0 left-0 w-full h-[100px] -z-10">
                        <Image
                            className="w-full h-full"
                            src={"/pattern.png"}
                            alt=""
                            width={300}
                            height={200}
                        />
                    </div>
                    <Image
                        className="object-contain w-full h-full"
                        src={generateCarImageUrl(result)}
                        alt=""
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex items-center justify-between">
                    {imageList.map(({ id, angle }) => {
                        return (
                            <div key={id} className="w-[100px] h-[70px]">
                                <Image
                                    className="object-contain w-full h-full"
                                    src={generateCarImageUrl(result, angle)}
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-[3px] p-3">
                    {keysValues.map((item, index) => {
                        if (
                            item[0] === "city_mpg" ||
                            item[0] === "combination_mpg" ||
                            item[0] === "highway_mpg"
                        )
                            return null;
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between text-sm text-white"
                            >
                                <p> {item[0]} </p>
                                <p> {item[1]} </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CarDetails;
