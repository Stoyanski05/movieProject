"use client"

import Image from 'next/image'

export default function Slider({ array }) {
    return (
        array.map(movie => {
            return (
                <div className='inline-flex flex-col gap-2 min-w-[180px]'>
                    <Image key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={200} width={180} alt="movie" className="rounded-md" />
                    <span>{movie.title}</span>
                </div>
            )
        })
    )
}