"use client"

import { useEffect, useState } from "react"

import Image from 'next/image'

import Moon from '/public/moon.png'
import Sun from '/public/sun.png'

import BackgroundMoon from '/public/backgroundMoon.jpg'
import BackgroundSun from '/public/backgroundSun.jpg'

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
            <Image src={isChecked ? Moon : Sun} alt="toggle icon" className={`rounded-full transition duration-150 absolute object-cover ${isChecked ? 'translate-x-7' : 'translate-x-1'}`} width={30} height={30}/>
            <Image className="overflow-hidden rounded-full" src={isChecked ? BackgroundMoon : BackgroundSun}/>
        </label>
    )
}