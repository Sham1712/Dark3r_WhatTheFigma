import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { GoDownload } from "react-icons/go";
import uiux from "../assets/girl.png";
import { Star } from './Star';
import womenLap from "../assets/womenlap.png";
import women from "../assets/women.png";

export const OurTracks = () => {
    return (
        <div className='px-4 lg:px-10 xl:px-20 w-full h-full'>
            <div>
                <h1 className='text-center text-3xl lg:text-4xl xl:text-5xl text-black font-bold mt-4'>Our Tracks</h1>
                <p className='text-center text-sm lg:text-base xl:text-lg text-[#8A8A8A] mt-1'>Lorem Ipsum is simply dummy text of the printing</p>
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='rounded shadow-md'>
                        <div className='p-4'>
                            <img src={uiux} alt="" />
                            <div className='flex justify-between items-center mt-2'>
                                <p className='text-xs text-[#ACACAC] font-semibold'>UI/UX Design</p>
                                <Star />
                            </div>
                            <p className='font-bold'>JEE 2024</p>
                            <p className='text-[#FF7426] pb-1 border-b-2'>$98</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <IoTimeOutline className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                                <div className='flex'>
                                    <HiOutlineVideoCamera className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                                <div className='flex'>
                                    <GoDownload className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <button className='bg-[#FF7426] font-semibold text-white rounded-full px-6 py-2 hover:scale-95'>Join Course</button>
                            </div>
                        </div>
                    </div>
                    <div className='rounded shadow-md'>
                        <div className='p-4'>
                            <img src={womenLap} alt="" className='rounded'/>
                            <div className='flex justify-between items-center mt-2'>
                                <p className='text-xs text-[#ACACAC] font-semibold'>UI/UX Design</p>
                                <Star />
                            </div>
                            <p className='font-bold'>NEET 2024</p>
                            <p className='text-[#FF7426] pb-1 border-b-2'>$98</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <IoTimeOutline className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                                <div className='flex'>
                                    <HiOutlineVideoCamera className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                                <div className='flex'>
                                    <GoDownload className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <button className='bg-[#FF7426] font-semibold text-white rounded-full px-6 py-2 hover:scale-95'>Join Course</button>
                            </div>
                        </div>
                    </div>
                    <div className='rounded shadow-md'>
                        <div className='p-4'>
                            <img src={women} alt="" className='rounded'/>
                            <div className='flex justify-between items-center mt-2'>
                                <p className='text-xs text-[#ACACAC] font-semibold'>UI/UX Design</p>
                                <Star />
                            </div>
                            <p className='font-bold'>GATE 2024</p>
                            <p className='text-[#FF7426] pb-1 border-b-2'>$98</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <IoTimeOutline className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                                <div className='flex'>
                                    <HiOutlineVideoCamera className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                                <div className='flex'>
                                    <GoDownload className='mr-1 mt-1'/>
                                    <p className='text-[#ACACAC] text-xs'>22hrs 30min</p>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <button className='bg-[#FF7426] font-semibold text-white rounded-full px-6 py-2 hover:scale-95'>Join Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
