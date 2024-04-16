"use client"

import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.themoviedb.org/3/authentication/token/new', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjFkMDNjNDg5NzYyMjg1M2YwOWQxZTBiN2E0MWM1YiIsInN1YiI6IjYzZTI0YmFiNTI4YjJlMDA3ZDVlZGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KHlKs9hmsElURN4IXdAcNb-Fs6UzxGJvQVPsJwuQBl0'
                }
            })
            const { request_token } = await res.json()

            window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/favorites`
        })()
    }, [])

    return (
        <></>
    )
}