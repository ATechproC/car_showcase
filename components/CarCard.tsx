import Image from "next/image";
import { Button1 } from ".";
import { generateCarImageUrl } from "utils";
import { CarDetailsProps } from "types";
import Link from "next/link";

const CarCard = ({ result }: CarDetailsProps) => {
    if (!result) return <div>Loading...</div>;

    return (
        <div className="relative group bg-[#EEEEEE] w-[270px] px-3 py-2 rounded-[5px] shadow-[0_5px_10px_rgba(0,0,0,0.4)]">
            <h2 className="font-bold text-gray-500">
                {result.make ?? "loading..."} {result.model}
            </h2>
            <p className="text-sm text-gray-500">
                {result.model === undefined ? "loading..." : "$50/day"}
            </p>
            <div className="pt-1 ml-10 text-center">
                {result.model === undefined ? (
                    "loading..."
                ) : (
                    <Image
                        src={generateCarImageUrl(result)}
                        alt="car"
                        width={150}
                        height={150}
                    />
                )}
            </div>
            <div className="flex items-center justify-between text-[10px] mt-3 text-gray-500 ">
                <div className="flex flex-col items-center gap-[2px]">
                    <Image src={"./steering-wheel.svg"} alt="" width={10} height={10} />
                    <div>
                        {" "}
                        {result.transmission === undefined
                            ? "loading..."
                            : result.transmission === "a"
                                ? "Automatic"
                                : "Manuel"}{" "}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[2px]">
                    <Image src={"./tire.svg"} alt="" width={10} height={10} />
                    <div> FWD </div>
                </div>
                <div className="flex flex-col items-center gap-[2px]">
                    <Image src={"./gas.svg"} alt="" width={10} height={10} />
                    <div>{result.model === undefined ? "loading..." : "23 MPG"}</div>
                </div>
            </div>
            <Link href="/car-details">
                <Button1
                    className="bg-[#40A2E3] cursor-pointer  text-white p-[3px] rounded-[7px] mt-[6px] w-full"
                    disabled={result.model === undefined ? true : false}
                >
                    {result.model === undefined ? "loading..." : "view more"}
                </Button1>
            </Link>
        </div>
    );
};

export default CarCard;
