    import React from 'react'
    import ig from '../assets/Instagram.png';
    import lk from '../assets/Linkedin.png';
    import t1 from '../assets/teach.png'
    import t2 from '../assets/teach2.png'
    import t3 from '../assets/teach3.png';

    export const Faculty = () => {
        return (
<div className="">
    <div className="mt-5 flex justify-center text-5xl font-bold text-[#050C26]">Our Faculty</div>
    <div className="mt-3 flex justify-center text-[#8A8A8A]">Lorem Ipsum is simply dummy text of the printing.</div>

    <div className="mx-32 mt-7 flex flex-row pb-10">
        
        <div className="mx-5 flex flex-col rounded-xl bg-white shadow-xl">
        <img className="mx-2 mt-2 flex h-50 justify-center rounded-lg align-middle" src={t1} alt="img" />

        <div className="mx-5 text-xl font-bold">Matthew E. McNatt</div>
        <div className="mx-5 text-lg font-medium text-[#868686]">Professor @George Brown College</div>
        <div className="m-5 font-[400] text-[#ACACAC]">Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.</div>

        <div className="mx-4 my-6 flex flex-row justify-between">
            <div className="text-lg font-semibold text-[#FF7426]">Engineering physics</div>

            <div className="flex flex-row gap-3">
            <div className="rounded-md bg-slate-100 p-2">
                <img src={ig} alt="" />
            </div>
            <div className="rounded-md bg-slate-100 p-2">
                <img src={lk} alt="" />
            </div>
            </div>
        </div>
        </div>
        
        <div className="mx-5 flex flex-col rounded-xl bg-white shadow-xl">
        <img className="mx-2 mt-2 flex h-50 justify-center rounded-lg align-middle" src={t2} alt="img" />

        <div className="mx-5 text-xl font-bold">Tracy D. Wright</div>
        <div className="mx-5 text-lg font-medium text-[#868686]">Professor @George Brown College</div>
        <div className="m-5 font-[400] text-[#ACACAC]">Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.</div>

        <div className="mx-4 my-6 flex flex-row justify-between">
            <div className="text-lg font-semibold text-[#FF7426]">Engineering physics</div>

            <div className="flex flex-row gap-3">
            <div className="rounded-md bg-slate-100 p-2">
                <img src={ig} alt="" />
            </div>
            <div className="rounded-md bg-slate-100 p-2">
                <img src={lk} alt="" />
            </div>
            </div>
        </div>
        </div>
        
        <div className="mx-5 flex flex-col rounded-xl bg-white shadow-xl">
        <img className="mx-2 mt-2 flex h-50 justify-center rounded-lg align-middle" src={t3} />

        <div className="mx-5 text-xl font-bold">Cynthia A. Nelson</div>
        <div className="mx-5 text-lg font-medium text-[#868686]">Professor @George Brown College</div>
        <div className="m-5 font-[400] text-[#ACACAC]">Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.</div>

        <div className="mx-4 my-6 flex flex-row justify-between">
            <div className="text-lg font-semibold text-[#FF7426]">Engineering physics</div>

            <div className="flex flex-row gap-3">
            <div className="rounded-md bg-slate-100 p-2">
                <img src={ig} alt="" />
            </div>
            <div className="rounded-md bg-slate-100 p-2">
                <img src={lk} alt="" />
            </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
        )
    }
