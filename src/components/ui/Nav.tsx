"use client"

import Link from "next/link"
import { useState } from "react"

function Nav() {
  const [isMenuShown, setIsMenuShown] = useState(false)

  return (
    <>
      <nav className="desktop desktop-nav">
        <div className="grid">
          <Link href="/#" className="nav-logo">Honzoraptor's</Link>
        </div>
        <div className="gap-10 nav-links">
          <Link href="/#" className="nav-link before-hover-height align-center">Home</Link>
          <Link href="/#about" className="nav-link before-hover-height align-center">About</Link>
          <Link href="/#contact" className="nav-link before-hover-height align-center">Contact</Link>
          <Link href="/projects" className="nav-link before-hover-height align-center">Projects</Link>
        </div>
      </nav>
      <nav className="mobile mobile-nav">
        <Link href="/#" className="nav-logo">Honzoraptor's</Link>
        <button className="grid no-style" onClick={() => setIsMenuShown(true)}>
          <img src="/menu.svg" className="max-height-20" />
        </button>
      </nav>
    </>
  )
}

export default Nav