"use client"

import Image from "next/image"

export default function Person({src, name}) {
    return (
        <div className="flex flex-col gap-2 w-[23%] h-1/2">
            <Image src={src} width={100} height={100} alt="actor" className="rounded-lg aspect-square object-cover"/>
            <span className="w-fit">{name}</span>
        </div>
    )
}