"use client"

export default function Category({ heading }) {
    return (
        <section className="flex justify-between w-[90%] m-auto">
            <h2 className="text-2xl font-bold capitalize">{heading}</h2>
            <button className="text-1xl border-2 border-gray-300 text-gray-300 px-2 rounded-2xl capitalize">see more</button>
        </section>
    )
}