"use client"

import Genre from "./genre"

export default function GenreSlider({ ids }) {
    return (
        <div className="flex flex-nowrap gap-2 overflow-y-hidden overflow-x-scroll">
            <Genre ids={ids} />
        </div>
    )
}