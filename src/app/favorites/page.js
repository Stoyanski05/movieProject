"use client"

import Category from "@/components/category"
import Footer from "@/components/footer"
import Genre from "@/components/genre"
import Rating from "@/components/rating"
import { useEffect, useState } from "react"
import { FaClock } from "react-icons/fa6"
import Image from 'next/image'

export default function Home() {
    const [favorites, setFavorites] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        (async () => {
            const url = 'https://api.themoviedb.org/3/account/17339790/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjFkMDNjNDg5NzYyMjg1M2YwOWQxZTBiN2E0MWM1YiIsInN1YiI6IjYzZTI0YmFiNTI4YjJlMDA3ZDVlZGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KHlKs9hmsElURN4IXdAcNb-Fs6UzxGJvQVPsJwuQBl0'
                }
            };

            await fetch(url, options)
                .then(res => res.json())
                .then(json => setFavorites(json.results))
                .catch(err => console.error('error:' + err));
        })()
    }, [loader])

    function removeHandler(e) {
        (async () => {
            const url = 'https://api.themoviedb.org/3/account/17339790/favorite';
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjFkMDNjNDg5NzYyMjg1M2YwOWQxZTBiN2E0MWM1YiIsInN1YiI6IjYzZTI0YmFiNTI4YjJlMDA3ZDVlZGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KHlKs9hmsElURN4IXdAcNb-Fs6UzxGJvQVPsJwuQBl0'
                },
                body: JSON.stringify({ media_type: 'movie', media_id: e.target.dataset.id, favorite: false })
            };

            await fetch(url, options)
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.error('error:' + err));
        })()

        setLoader(!loader)
    }

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <header className="flex justify-center items-center h-20 m-auto">
                <h1 className="text-center text-2xl font-bold">MyMovie</h1>
            </header>
            <main className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <Category heading={'Favorites'} />
                </div>
                {favorites.map(bookmark => {
                    return (
                        <div key={bookmark?.id} className="flex gap-2 h-40">
                            <Image src={`https://image.tmdb.org/t/p/original/${bookmark?.poster_path}`} height={100} width={120} className="rounded-md object-cover" alt="bookmark" />
                            <div className="flex flex-col justify-evenly w-3/4">
                                <h2 className="font-bold">{bookmark?.title}</h2>
                                <div className="flex items-center gap-2">
                                    <Rating rating={bookmark?.vote_average} />
                                </div>
                                <div className={`flex flex-nowrap gap-2 pr-12 ${bookmark?.genre_ids.length > 3 ? '' : 'overflow-x-hidden'} overflow-y-hidden`}>
                                    <Genre ids={bookmark?.genre_ids} />
                                </div>
                                <span className="flex items-center gap-2">
                                    <FaClock />
                                    1h 10min
                                </span>
                                <button data-id={bookmark?.id} onClick={removeHandler} className="px-4 py-1 w-fit bg-black rounded-full text-white">Remove</button>
                            </div>
                        </div>
                    )
                })}
            </main>
            <Footer page={'bookmark'} />
        </div>
    )
}