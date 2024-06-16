"use client"

import { useEffect } from 'react'
import ErrorPage from "@/components/pages/Error"

export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorPage code={500} message={error.message} />
}