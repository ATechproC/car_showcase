import Link from "next/link";
import Image from "next/image";

// import CustomButton from "./CustomButton";

import { Button1 } from "./CustomButton";

const NavBar = () => (
    <header className='fixed top-0 z-30 w-full bg-white'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex items-center justify-center'>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>

            {/* <CustomButton
                title='Sign in'
                // btnType='button'
                // containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            /> */}
            <Button1
                className='text-primary-blue rounded-full bg-white min-w-[130px]'
                type="button"
                >
                Sign In
            </Button1>
        </nav>
    </header>
);

export default NavBar;