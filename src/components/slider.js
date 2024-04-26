import Image from 'next/image';
import Link from 'next/link';
import Rating from './rating';

export default function Slider({ array }) {
  // Map through the array of movies to render each movie in the slider
  return (
    <>
      {array.map((movie) => (
        <Link href={`/${movie.id}`} key={movie.id} className='flex flex-col gap-2 min-w-[42.5%]'>
          {/* Render the movie poster */}
          <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={600} width={600} alt="movie" className="rounded-md object-cover aspect-square w-full h-full" />
          {/* Render the movie title */}
          <span className='overflow-hidden whitespace-nowrap'>{movie.title}</span>
          {/* Render the movie rating */}
          <div className='flex items-center gap-2'>
            <Rating rating={movie.vote_average} />
          </div>
        </Link>
      ))}
    </>
  );
}