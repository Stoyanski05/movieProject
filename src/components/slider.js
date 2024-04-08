"use client"

import Image from 'next/image'
import Link from 'next/link'

import Rating from './rating'

export default function Slider({ array }) {
    return (
        array.map(movie => {
            return (
                <Link href={`/${movie.id}`} key={movie.id} className='flex flex-col gap-2 min-w-[42.5%]'>
                    <Image key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={800} width={800} alt="movie" className="rounded-md object-cover aspect-square w-full h-full" />
                    <span className='break-words'>{movie.title}</span>
                    <div className='flex items-center gap-2'>
                        <Rating rating={movie.vote_average} />
                    </div>
                </Link>
            )
        })
    )
}