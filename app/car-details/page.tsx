// import Modal from "@components/Modal"

import CarDetails from "@components/CarDetails"
import Link from "next/link"

function page() {

    return (
        <>
            <CarDetails />
            <Link href="/">
                <button
                    className="px-3 py-1 mt-5 ml-5 rounded-md md:mt-10 bg-sky-500 w-fit">
                    <span className="font-semibold text-white cursor-pointer">Go Back</span>
                </button>
            </Link>
        </>
    )
}

export default page