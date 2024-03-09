import React, { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="px-4 py-4 md:px-20 md:py-8">
            <nav className="flex justify-between items-center">
                <div className='flex gap-x-4 items-center'>
                    <div>
                        <svg width="59" height="52" viewBox="0 0 59 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3433 10.65L46.1416 0.780273V9.36441L29.3433 10.65Z" fill="#B8E8F2"/>
<path d="M29.3433 10.6501L49.7233 3.09448V9.2157L29.3433 10.6501Z" fill="#88CFE5"/>
<path d="M29.3432 10.6501L7.51074 0V8.34957L29.3432 10.6501Z" fill="#B8E8F2"/>
<path d="M29.3432 10.65L2.90967 1.92603V7.81268L29.3432 10.65Z" fill="#88CFE5"/>
<path d="M29.3791 51.8476L0.0315758 46.1685L0 4.96191L29.3475 10.6456L29.3791 51.8476Z" fill="#472758"/>
<path d="M58.7946 34.0297C58.7946 41.3192 53.0748 47.1968 45.9973 48.5772L29.3478 51.8159L29.3433 10.65L44.8606 7.63224C51.7667 6.28801 57.3782 9.84256 57.3782 16.9607C57.3782 20.3709 56.0745 23.33 53.9274 25.6891C56.8684 27.0514 58.79 29.8527 58.7946 34.0297ZM38.4055 17.7095V24.999L44.8606 23.7405C46.8995 23.3435 48.3159 21.5392 48.3159 19.4236C48.3159 17.308 46.9581 16.045 44.8606 16.4509L38.4055 17.7095ZM49.7323 35.0852C49.7323 32.7937 48.2617 31.4315 45.9928 31.8735L38.4055 33.3486V41.229L45.9928 39.754C48.2617 39.3164 49.7323 37.3813 49.7323 35.0852Z" fill="#4D2C5E"/>
</svg>

                    </div>
                    <div className="logo capitalize text-lg">book store</div>
                </div>
                <div className="hidden md:flex items-center">
                    {["Home", "About us", "Courses", "Faculty", "Contact us"].map((item, index) => (
                        <a
                            href=""
                            className={`${
                                index > 2
                                    ? 'text-black capitalize mr-[60px] font-semibold'
                                    : ' text-black capitalize mr-[45px] font-semibold'
                            }`}
                            key={index}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="text-white bg-[#4D2C5E] px-8 py-2 rounded-full mr-[11px] font-semibold hover:scale-95">
                        Login
                    </button>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="mt-4 md:hidden">
                    <div className="flex flex-col">
                        {["Home", "About us", "Courses", "Faculty", "Contact us"].map((item, index) => (
                            <a
                                href=""
                                className="text-black capitalize py-2 font-semibold"
                                key={index}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="text-white bg-[#4D2C5E] px-8 py-2 rounded-full mt-4 font-semibold hover:scale-95">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};