"use client"

export default function Genre({ ids }) {
    const genres = {
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        History: 36,
        Horror: 27,
        Music: 10402,
        Mystery: 9648,
        Romance: 10749,
        "Sci-Fi": 878,
        "TV Movie": 10770,
        Thriller: 53,
        War: 10752,
        Western: 37,
    }

    function getKeyByValue(obj, value) {
        return Object.keys(obj)
            .filter(key => obj[key] === value);
    }

    return (
        <>
            {ids.map(id => <span key={id} className="py-1 px-4 w-fit text-center bg-[#DBE3FF] text-[#88A4E8] rounded-2xl">{getKeyByValue(genres, id)}</span>)}
        </>
    )
}