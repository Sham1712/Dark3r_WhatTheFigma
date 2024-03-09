import React from 'react'
import { GrSearch } from "react-icons/gr";
import hero from "../assets/Hero.png"

const HeroPage = () => {
    return (
        <div className='w-full px-4 md:px-20 mt-20 flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2'>
                <div className='description mb-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>The <span className='text-orange-500'>Smart</span></h1>
                    <h1 className='text-3xl md:text-5xl font-bold mt-4'>Choice For <span className='text-orange-500'>Future</span></h1>
                    <div className='mt-4'>
                        <p className='font-thin'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, labore error aliquam, omnis incidunt numquam maxime atque debitis minima commodi quisquam voluptate. Est, eligendi accusantium.
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <input type="text" placeholder='Search for a location...' className='w-full bg-white py-3 px-14 rounded-full shadow-md focus:outline-none' />
                    <GrSearch className='absolute top-4 left-6 w-5 h-5 text-slate-400' />
                    <button className='absolute right-0 top-0 bg-[#4D2C5E] py-3 px-6 rounded-full text-white hover:scale-95'>Continue</button>
                </div>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0'>
                <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=sph" alt="" className='w-full' />
            </div>
        </div>
    )
}

export default HeroPage;