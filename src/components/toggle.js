"use client"

import { useEffect, useState } from "react"

import Image from 'next/image'

export default function Toggle({ element }) {
    const [darkmode, setDarkmode] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    function checkHandler() {
        setIsChecked(!isChecked)
        setDarkmode(!darkmode)
    }

    useEffect(() => {
        if (darkmode) {
            element.classList.add('bg-black')
            element.classList.add('text-white')
            element.classList.remove('bg-white')
        } else {
            element.classList.remove('bg-black')
            element.classList.remove('text-white')
            element.classList.add('bg-white')
        }
    }, [isChecked])

    return (
        <label htmlFor="checkbox" className={`flex items-center cursor-pointer w-14 h-8 rounded-full`} >
            <input type="checkbox" id="checkbox" className="sr-only" checked={isChecked} onChange={checkHandler} />
            <Image src='/Sun.png' alt="toggle icon" className={`rounded-full transition duration-500 absolute object-cover ${isChecked ? 'translate-x-6 opacity-0' : 'translate-x-0 opacity-100'}`} width={30} height={30}/>
            <Image src='/moon.png' alt="toggle icon" className={`rounded-full transition duration-500 absolute object-cover ${isChecked ? 'translate-x-6 opacity-100' : 'translate-x-0 opacity-0'}`} width={30} height={30}/>
            <Image className="overflow-hidden rounded-full" alt="background" src={isChecked ? '/backgroundMoon.jpg' : '/backgroundSun.jpg'} width={100} height={100}/>
        </label>
    )
}