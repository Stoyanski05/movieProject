"use client"

import Category from "@/components/category";
import Footer from "@/components/footer";
import Toggle from "@/components/toggle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
  const [popular, setPopular] = useState([])
  const [trending, setTrending] = useState([])

  useEffect(() => {
    (async () => {
      const popularRes = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d61d03c4897622853f09d1e0b7a41c5b&page=1')
      const popularData = await popularRes.json()

      const trendingRes = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=d61d03c4897622853f09d1e0b7a41c5b')
      const trendingData = await trendingRes.json()

      setPopular(popularData.results)
      setTrending(trendingData.results)
    })()
  }, [])

  return (
    <>
      <header className="h-[100px] mb-2">
        <div className="flex justify-between h-full items-center w-2/3 px-6 float-right">
          <h1 className="text-2xl font-bold text-gray-800">MyMovie</h1>
          <Toggle />
        </div>
      </header>
      <main className="flex flex-col gap-6 m-auto">
        <div className="flex flex-col gap-4">
          <Category heading="now showing" />
          <article className="flex gap-4 pl-6">
            {popular.map((movie) => {
              return (
                <Image key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={200} width={180} alt="movie" className="rounded-md" />
              )
            })}
          </article>
        </div>
        <div className="flex flex-col gap-4">
          <Category heading="popular" />
          <article className="flex flex-col gap-4 pl-6">
            {trending.map((movie) => {
              return (
                <Link href={`/${movie.id}`} key={movie.id} className="flex gap-2">
                  <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={100} width={125} className="rounded-md" alt="movie" />
                  <div className="flex flex-col justify-between py-4 w-3/5">
                    <h2 className="font-bold">{movie.title}</h2>
                    <div className="flex items-center gap-4">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                      <span className="text-gray-400">{Math.round(movie.vote_average)}/10 IMDb</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="py-1 w-1/3 text-center bg-blue-300 text-blue-600 rounded-2xl">Horror</span>
                      <span className="py-1 w-1/3 text-center bg-blue-300 text-blue-600 rounded-2xl">Horror</span>
                      <span className="py-1 w-1/3 text-center bg-blue-300 text-blue-600 rounded-2xl">Horror</span>
                    </div>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faClock} />
                      1h 10min
                    </span>
                  </div>
                </Link>
              )
            })}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
