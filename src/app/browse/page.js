"use client"

import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { FaSearchengin } from "react-icons/fa6"
import Toggle from "@/components/toggle"
import { useSearchParams } from "next/navigation"

export default function Home() {
    const [movies, setMovies] = useState([])
    const [inputValue, setInputValue] = useState('') // set value
    const ref = useRef(null)
    const formRef = useRef(null)

    useEffect(() => {
        if (searchParams.get('query')) {
            // set here
        }
    }, [])

    const searchParams = useSearchParams()

    async function formSubmit(e) {
        e.preventDefault()

        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target[0].value}&api_key=d61d03c4897622853f09d1e0b7a41c5b`, { cache: "force-cache" })
        const data = await res.json()

        data.results.sort((a, b) => b.vote_average - a.vote_average)

        setMovies(data.results)
    }

    return (
        <div ref={ref}>
            <header className="h-[8vh] w-full flex justify-center items-center">
                <form ref={formRef} onSubmit={formSubmit}>
                    <label className="flex justify-center items-center gap-4 py-2 px-2 border-black border-2 bg-black text-white h-fit w-fit">
                        <input className="outline-none bg-inherit" placeholder="Fight Club.."></input>
                        <FaSearchengin size={30} />
                    </label>
                </form>
                <div className="absolute top-5 right-4">
                    {ref && ref.current && <Toggle element={ref.current} />}
                </div>
            </header>
            <main className="h-[50vh] flex flex-col gap-20 items-center mt-4">
                <article className="flex flex-wrap gap-4 items-center mb-20 px-10 w-full">
                    {movies.map(movie => {
                        return (
                            <Link href={`/${movie.id}`} key={movie.id} className='flex flex-col gap-2 w-40'>
                                <Image priority key={movie.id} src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '/person-placeholder.jpg'} height={600} width={600} alt="movie" className="rounded-md object-cover aspect-square w-full h-full" />
                            </Link>
                        )
                    })}
                </article>
            </main>
            <Footer page={'browse'} />
        </div>
    )
}