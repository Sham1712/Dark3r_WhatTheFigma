import React from 'react'
import onlineTest from "../assets/online-test 1.png";
import exam from "../assets/exam 1.png";
import certificate from "../assets/certification.png";



export const WorkFlow = () => {
    return (
        <div class='px-4 md:px-[244px] mt-8 md:mt-[174px]'>
            <div class='bg-[#4D2C5E] rounded-md flex flex-col md:flex-row'>

                <div class='py-4 md:py-[70px] px-2 md:px-[35px] flex items-center'>
                    <div class='icon bg-[#71567E] px-4 py-3 rounded-xl mr-4'>
                        <img class='w-24 h-10' src={onlineTest} alt='' />
                    </div>
                    <div class='content'>
                        <h3 class='text-white font-semibold text-md'>Learn the Skills</h3>
                        <p class='text-[#FFFFFF] font-thin text-xs mt-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>

                <div class='py-4 md:py-[70px] px-2 md:px-[35px] flex items-center'>
                    <div class='icon bg-[#71567E] px-4 py-3 rounded-xl mr-4'>
                        <img class='w-24 h-10' src={exam} alt='' />
                    </div>
                    <div class='content'>
                        <h3 class='text-white font-semibold text-md'>Get Ready For a Career</h3>
                        <p class='text-[#FFFFFF] font-thin text-xs mt-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>

                <div class='py-4 md:py-[70px] px-2 md:px-[35px] flex items-center'>
                    <div class='icon bg-[#71567E] px-4 py-3 rounded-xl mr-4'>
                        <img class='w-24 h-10' src={certificate} alt='' />
                    </div>
                    <div class='content'>
                        <h3 class='text-white font-semibold text-md'>Learn the Skills</h3>
                        <p class='text-[#FFFFFF] font-thin text-xs mt-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
