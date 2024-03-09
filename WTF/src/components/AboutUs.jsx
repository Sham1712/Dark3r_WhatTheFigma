import React from 'react'
import LogoB from "../assets/LogoBIg.png";

export const AboutUs = () => {
    return (
        <div className='px-4 md:px-[224px] mt-[102px] h-auto md:h-screen'>
            <h1 className='text-3xl md:text-5xl font-bold mt-10'>About Us</h1>
            <div className='flex flex-col md:flex-row gap-x-20 items-center'>
                <div className='md:w-1/2'>
                    <p className="mb-8 mt-1 md:mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <img src={LogoB} className='w-full h-auto' alt="" />
                </div>
            </div>
        </div>
    )
}