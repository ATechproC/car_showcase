import Image from "next/image";
import { CustomButton } from ".";
import { fetchCars } from "utils";
import { FilterProps } from "types";

const CarCard = async () => {

    const result = await fetchCars();

    const {drive, fuel_type, make, model, transmission, year} : FilterProps = result;
    
    return (
        <div className="relative group bg-[#EEEEEE] w-[270px] px-3 py-2 rounded-[5px] shadow-[0_5px_10px_rgba(0,0,0,0.4)]">
            <h2 className="font-bold text-gray-500">{make} {model}</h2>
            <p className="text-sm text-gray-500">$50/day</p>
            <div className="pt-1 ml-10 text-center">
                <Image src={"/hero.png"} alt="car" width={150} height={150} />
            </div>
            <div className="flex items-center justify-between text-[10px] mt-3 text-gray-500 ">
                <div className="flex flex-col items-center gap-[2px]">
                    <Image src={"./steering-wheel.svg"} alt="" width={10} height={10} />
                    <div> {transmission === "a" ? "Automatic" : "Manuel"} </div>
                </div>
                <div className="flex flex-col items-center gap-[2px]">
                    <Image src={"./tire.svg"} alt="" width={10} height={10} />
                    <div> {drive.toUpperCase()} </div>
                </div>
                <div className="flex flex-col items-center gap-[2px]">
                    <Image src={"./gas.svg"} alt="" width={10} height={10} />
                    <div>23 MPG</div>
                </div>
            </div>
            <CustomButton
                title="view more"
            />
        </div>
    );
};

export default CarCard;
