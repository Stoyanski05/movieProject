"use client"

export default function Category({ heading }) {
    return (
        <>
            <h2 className="text-2xl font-bold capitalize">{heading}</h2>
            <button className="text-1xl w-fit border-2 border-gray-300 text-gray-300 px-2 rounded-2xl capitalize">see more</button>
        </>
    )
}