    import React from 'react'
    import obj from "../assets/OBJECTS.png";
    import heart from "../assets/hearts.png";
    import jg from "../assets/jigsaw.png";
    import grp from "../assets/Group.png";
    export const LearningExp = () => {
    return (
        <div className='h-screen bg-[#FDF8EE] my-[122px] w-full'>
            <div className='flex'>
                <di className="mr-[146px]" style={{ backgroundImage: `url(${grp})` }}>
                    <img src={obj} alt="" className='ml-[224px] mt-[63px] mr-6' />
                </di>
                <div className='mt-[95px]'>
                    <h1 className='font-bold text-5xl'>Premium <span className='text-[#FF7426]'>Learning</span></h1>
                    <h1 className='text-black font-bold text-5xl'>Experience</h1>
                    <div className='flex mt-[46px] gap-x-6'>
                        <div className='bg-[#4D2C5E] p-4 rounded-xl'>
                            <img src={heart} className='w-10 h-10' alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>Easily Accessible</h1>
                            <p className='mt-[3px]'>Learning Will fell Very Comfortable With Courslab.</p>
                        </div>
                    </div>
                    <div className='flex mt-[34px] gap-x-6'>
                        <div className='bg-[#4D2C5E] p-4 rounded-xl'>
                            <img src={jg} className='w-10 h-10' alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>Fun Learning Experience</h1>
                            <p className='mt-[3px]'>Learning Will fell Very Comfortable With Courslab.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
