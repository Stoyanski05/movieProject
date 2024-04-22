"use client"

import Footer from "@/components/footer"

import { FaSearchengin } from "react-icons/fa6"

export default function Home() {
    return (
        <>
            <main className="h-[50vh] flex justify-center mt-4">
                <form action="/browse?search=">
                    <label className="flex justify-center items-center gap-4 py-2 px-2 border-black border-2 bg-black text-white h-fit w-fit">
                        <input className="outline-none bg-inherit" placeholder="Fight Club.."></input>
                        <FaSearchengin size={30} />
                    </label>
                </form>
            </main>
            <Footer page={'browse'} />
        </>
    )
}