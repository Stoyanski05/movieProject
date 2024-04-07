"use client"

import Image from 'next/image'

import Rating from './rating'

export default function Slider({ array }) {
    return (
        array.map(movie => {
            return (
                <div key={movie.id} className='flex flex-col gap-2 min-w-[180px]'>
                    <Image key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={200} width={180} alt="movie" className="rounded-md" />
                    <span className='break-words'>{movie.title}</span>
                    <div className='flex items-center gap-2'>
                        <Rating rating={movie.vote_average} />
                    </div>
                </div>
            )
        })
    )
}