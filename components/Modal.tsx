"use client"

import Image from "next/image"
import { useModal } from "contexts/ModalContext"
import { useEffect } from "react";
import { useCarDetails } from "contexts/CarDetailsModal";
import { generateCarImageUrl } from "utils";

function Modal() {

    const {modal, setModal} = useModal();
    
    const {result} = useCarDetails();

    const keysValues : [string, string][]= Object.entries(result);


    useEffect(() => {
        if(modal === "block") {
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    return (
        <div className={`${modal} transition-all duration-300 ease-in-out`}>
            <div onClick={() => setModal("hidden")}  className="fixed top-0 left-0 z-10 w-screen h-screen bg-[rgba(0,0,0,0.4)]"></div>
            <div className="absolute z-20 p-3 bg-white rounded-lg w-80 left-[50%] -translate-x-[50%]">
                <span onClick={() => setModal("hidden")} className="absolute cursor-pointer rounded-full w-[20px] h-[20px] bg-white grid place-items-center top-[5px] right-[5px]">
                    <Image src={"./close.svg"} alt="" width={10} height={10}/>
                </span>
                <div className="relative w-full p-2 h-[100px]">
                    <div className="absolute top-0 left-0 w-full h-[100px] -z-10">
                        <Image className="w-full h-full" src={"/pattern.png"} alt="" width={200} height={200} />
                    </div>
                    <Image className="object-contain w-full h-full" src={generateCarImageUrl(result)} alt="" width={150} height={150} />
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-[100px] h-[70px]">
                        <Image className="object-contain w-full h-full" src={generateCarImageUrl(result)} alt="" width={30} height={30} />
                    </div>
                    <div className="w-[100px] h-[70px]">
                        <Image className="object-contain w-full h-full" src={generateCarImageUrl(result, "33")} alt="" width={30} height={30} />
                    </div>
                    <div className="w-[100px] h-[70px]">
                        <Image className="object-contain w-full h-full" src={generateCarImageUrl(result, "13")} alt="" width={30} height={30} />
                    </div>
                </div>
                <div className="flex flex-col gap-[3px] p-3 bg-white">
                    {keysValues.map((item, index) => {
                        if(item[0] === "city_mpg" || item[0] === "combination_mpg" || item[0] === "highway_mpg") 
                        return null
                        return <div key={index} className="flex items-center justify-between text-sm text-gray-500 bg-white p">
                        <p> {item[0]} </p>
                        <p> {item[1]} </p>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal