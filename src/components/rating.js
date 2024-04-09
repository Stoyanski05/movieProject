"use client"

import { FaStar } from "react-icons/fa6";

export default function Rating({ rating }) {
    return (
        <>
            <FaStar className="text-yellow-400"/>
            <span className="text-[#9C9C9C] w-fit pb-[0.5px]">{rating?.toFixed(1)}/10 IMDb</span>
        </>
    )
}