"use client"

import Link from "next/link"

interface props {
  code: number
  message: string
}

function Error({ code, message }: props) {
  return (
    <header className="flex items-center justify-center min-h-[100svh]">
      <div className="error-page-dialog text-center flex gap-2.5 flex-col">
        <h1>Error {code}</h1>
        <p className="text-gray-400">{message}</p>
        {code === 404 && <Link href="/" className="text-link mx-auto">Go to the home page</Link>}
      </div>
    </header>
  )
}

export default Error