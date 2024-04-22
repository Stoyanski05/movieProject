"use client"

import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.themoviedb.org/3/authentication/token/new', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
                }
            })
            
            const { request_token } = await res.json()

            window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/`
        })()
    }, [])

    return (
        <></>
    )
}