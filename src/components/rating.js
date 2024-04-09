"use client"

import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Rating({ rating }) {
    return (
        <>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <span className="text-[#9C9C9C] w-fit pb-[0.5px]">{rating?.toFixed(1)}/10 IMDb</span>
        </>
    )
}