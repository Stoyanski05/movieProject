"use client"

export default function Runtime({ runtime }) {
    const time = {
        hours: Math.floor(runtime / 60),
        minutes: runtime - Math.floor(runtime / 60) * 60
    }

    return (
        <span className="font-bold">{time.hours}h {time.minutes}min</span>
    )
}