"use client"

import Link from "next/link"

interface props {
  code: number
  message: string
}

function Error({ code, message }: props) {
  return (
    <header className="flex-center-all min-h-screen">
      <div className="error-page-dialog text-center gap-10 flex-column">
        <h1>Error {code}</h1>
        <p className="grey">{message}</p>
        {code === 404 && <Link href="/" className="text-link m-inline-auto">Go to the home page</Link>}
      </div>
    </header>
  )
}

export default Error