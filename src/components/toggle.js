import { useEffect, useState } from "react"

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
        <label htmlFor="checkbox" className={`flex items-center cursor-pointer w-14 h-8 rounded-full  ${isChecked ? 'bg-white' : 'bg-[#AAA9B1]'}`} >
            <input type="checkbox" id="checkbox" className="sr-only" checked={isChecked} onChange={checkHandler} />
            <div className={`w-6 h-6 relative rounded-full shadow-md transition ${isChecked ? 'bg-black translate-x-7' : 'bg-white translate-x-1'}`}></div>
        </label>
    )
}