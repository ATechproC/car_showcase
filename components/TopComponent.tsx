"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Top() {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 120) {
                setState(true);
            } else {
                setState(false);
            }
        });
    }, []);

    return (
        <div
            onClick={handleClick}
            className={` ${state ? "block" : "hidden"
                } cursor-pointer fixed z-40 p-1 rounded-md bottom-2 right-2 bg-primary-blue`}
        >
            <Image src={"/top1.png"} alt="" width={18} height={18} />
        </div>
    );
}

export default Top;
