import React from "react";
import { FaStar } from "react-icons/fa6";
export const Star = () => {
    return (
        <div className="flex gap-x-[2px] mt-1">
        <FaStar className="text-[#FFA135]" />
        <FaStar className="text-[#FFA135]" />
        <FaStar className="text-[#FFA135]" />
        <FaStar className="text-[#FFA135]" />
        <FaStar className="text-[#F9D4AB]" />
        </div>
    );
};
