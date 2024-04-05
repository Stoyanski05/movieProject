"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faBookmark } from "@fortawesome/free-solid-svg-icons"

import Toggle from "@/components/toggle"
import Rating from "@/components/rating"
import Category from "@/components/category"
import Person from "@/components/person"
import Genre from "@/components/genre"
import Runtime from "@/components/runtime"

export default function Home({ params }) {
    const ref = useRef(null)
    const [isRef, setIsRef] = useState(false)

    const [movie, setMovie] = useState({})
    const [trailer, setTrailer] = useState([])
    const [cast, setCast] = useState([])

    useEffect(() => {

        (async () => {
            const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=d61d03c4897622853f09d1e0b7a41c5b`)
            const movieData = await movieRes.json()

            const trailerRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US&api_key=d61d03c4897622853f09d1e0b7a41c5b`)
            const trailerData = await trailerRes.json()

            const castRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d61d03c4897622853f09d1e0b7a41c5b&language=en-US&append_to_response=credits`)
            const castData = await castRes.json()

            setIsRef(!isRef)
            setMovie(movieData)
            setTrailer(trailerData.results)
            setCast(castData.credits.cast);
        })()
    }, [])

    return (
        <>
            <header className="absolute flex justify-between items-center h-[20%] w-full px-6">
                <Link className="text-white" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                </Link>
                {isRef ? <Toggle element={ref.current}/> : <p>404</p>}
            </header>
            <main>
                {/* turn into custom video player */}
                <iframe allowFullScreen className="w-full h-[40vh]"
                    src={`https://www.youtube.com/embed/${trailer[3] && trailer[3].key}`}>
                </iframe>
                <article ref={ref} className="absolute top-1/3 w-full bg-white rounded-lg p-10 flex flex-col gap-6">
                    <article className="flex justify-between">
                        <h1 className="text-2xl w-3/4">{movie.original_title}</h1>
                        <FontAwesomeIcon icon={faBookmark} size="2xl" />
                    </article>
                    <div className="flex items-center gap-2">
                        <Rating rating={movie.vote_average} />
                    </div>
                    {/* turn into component - genre */}
                    <div className="flex gap-2">
                        {/* <Genre ids={movie?.genres?.map(obj => obj.id)}/> */}
                    </div>
                    <div className="flex justify-between w-3/4">
                        <section className="flex flex-col gap-2">
                            <h2>Length</h2>
                            <Runtime runtime={movie && movie.runtime} />
                        </section>
                        <section className="flex flex-col gap-2">
                            <h2>Language</h2>
                            <span className="font-bold uppercase">{movie.original_language}</span>
                        </section>
                        <section className="flex flex-col gap-2">
                            {/* get dynamic age rating */}
                            <h2>Rating</h2>
                            <span className="uppercase font-bold">pg-13</span>
                        </section>
                    </div>
                    <article>
                        <h2 className="capitalize text-2xl font-bold">description</h2>
                        <p>{movie.overview}</p>
                    </article>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <Category heading='cast' />
                        </div>
                        <div className="flex gap-2 flex-wrap justify-between">
                            {cast.map((person, i) => <Person key={i} src={person.profile_path == null ? '/person-placeholder.jpg' : `https://image.tmdb.org/t/p/original/${person.profile_path}`} name={person.name} />)}
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}