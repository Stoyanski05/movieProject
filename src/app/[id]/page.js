"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import Toggle from "@/components/toggle"
import Rating from "@/components/rating"
import Category from "@/components/category"
import Person from "@/components/person"
import Runtime from "@/components/runtime"
import Genre from "@/components/genre"

import { FaArrowLeft, FaRegBookmark } from "react-icons/fa6"

export default function Home({ params }) {
    const bookmarkRef = useRef(null)
    const ref = useRef(null)
    const [isRef, setIsRef] = useState(false) // fix so it uses ref instead of this

    const [movie, setMovie] = useState({})
    const [trailer, setTrailer] = useState([])
    const [cast, setCast] = useState([])

    useEffect(() => {
        (async () => {
            const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=d61d03c4897622853f09d1e0b7a41c5b`, { cache: "force-cache" })
            const movieData = await movieRes.json()

            const trailerRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US&api_key=d61d03c4897622853f09d1e0b7a41c5b`, { cache: "force-cache" })
            const trailerData = await trailerRes.json()

            const castRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d61d03c4897622853f09d1e0b7a41c5b&language=en-US&append_to_response=credits`, { cache: "force-cache" })
            const castData = await castRes.json()

            setIsRef(!isRef)
            setMovie(movieData)
            setTrailer(trailerData.results)
            setCast(castData.credits.cast);
        })()
    }, [])

    function bookmarkHandler() {
        (async () => {
            // const favoriteRes = await fetch('https://api.themoviedb.org/3/account/17339790/favorite', {
            //     method: "POST",
            //     headers: {
            //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjFkMDNjNDg5NzYyMjg1M2YwOWQxZTBiN2E0MWM1YiIsInN1YiI6IjYzZTI0YmFiNTI4YjJlMDA3ZDVlZGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KHlKs9hmsElURN4IXdAcNb-Fs6UzxGJvQVPsJwuQBl0",
            //     },
            //     body: JSON.stringify({media_type: 'movie', media_id: 550, favorite: true})
            // })
            // const favoriteData = await favoriteRes.json()

            // console.log(favoriteData);

            const url = 'https://api.themoviedb.org/3/account/17339790/favorite';
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjFkMDNjNDg5NzYyMjg1M2YwOWQxZTBiN2E0MWM1YiIsInN1YiI6IjYzZTI0YmFiNTI4YjJlMDA3ZDVlZGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KHlKs9hmsElURN4IXdAcNb-Fs6UzxGJvQVPsJwuQBl0'
                },
                body: JSON.stringify({ media_type: 'movie', media_id: params.id, favorite: true })
            };

            await fetch(url, options)
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.error('error:' + err));
        })()
    }

    return (
        <>
            <header className="absolute flex justify-between items-center h-[20%] w-full px-6">
                <Link className="text-white" href="/">
                    <FaArrowLeft size={30} />
                </Link>
                {isRef ? <Toggle element={ref.current} /> : ''}
            </header>
            <main>
                <iframe allowFullScreen className="w-full h-[40vh]"
                    src={trailer[3] ? `https://www.youtube.com/embed/${trailer[3].key}` : ''}>
                </iframe>
                <article ref={ref} className="absolute top-1/3 w-full bg-white rounded-lg p-10 flex flex-col gap-6">
                    <article className="flex justify-between">
                        <h1 className="text-2xl w-3/4">{movie.original_title}</h1>
                        <div ref={bookmarkRef} onClick={bookmarkHandler}>
                            <FaRegBookmark size={25} />
                        </div>
                    </article>
                    <div className="flex items-center gap-2">
                        <Rating rating={movie.vote_average} />
                    </div>
                    <div className="flex gap-2">
                        <Genre ids={movie.genres ? movie.genres.map(obj => obj.id) : [0]} />
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
                    <article className="flex flex-col gap-3">
                        <h2 className="capitalize text-2xl font-bold">description</h2>
                        <p className="text-[#9C9C9C]">{movie.overview}</p>
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