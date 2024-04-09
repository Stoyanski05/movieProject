"use client"


import { FaHouse, FaRegBookmark, FaTicket } from "react-icons/fa6";

export default function Footer({ page }) {
    return (
        <footer className="fixed bottom-0 h-[12.5%] w-full shadow-2xl order-t-4 border-gray-50 bg-inherit flex justify-center items-center pb-4">
            <ul className="flex justify-between w-[80%]">
                <li>
                    <FaHouse className={`${page == 'home' && 'text-[#D6D6FD]'} outline-black"`} size={30} />
                </li>
                <li>
                    <FaTicket className={`${page == 'unknown' && 'text-[#D6D6FD]'} rotate-90 border-black`} size={30} />
                </li>
                <li>
                    <FaRegBookmark className={page == 'bookmark' && 'text-[#D6D6FD]'} size={30} />
                </li>
            </ul>
        </footer>
    )
}