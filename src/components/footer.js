"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClapperboard, faBookmark, faTicket } from "@fortawesome/free-solid-svg-icons"
export default function Footer() {
    return (
        <footer className="fixed bottom-0 h-[12.5%] w-full order-t-4 border-gray-50 bg-white flex justify-center items-center pb-4">
            <ul className="flex justify-between w-[80%]">
                <li>
                    <FontAwesomeIcon icon={faClapperboard} size="2x" className="text-blue-950 cursor-pointer hover:scale-105"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTicket} size="2x" className="cursor-pointer hover:scale-105"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faBookmark} size="2x" className="cursor-pointer hover:scale-105"/>
                </li>
            </ul>
        </footer>
    )
}