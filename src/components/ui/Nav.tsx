"use client"

import Link from "next/link"
import { useState } from "react"

function Nav() {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const navLinks = [
    {
      text: "Home",
      linkHref: "/#",
    },
    {
      text: "About",
      linkHref: "/#about"
    },
    {
      text: "Skills",
      linkHref: "/#skills"
    },
    {
      text: "Projects",
      linkHref: "/projects",
    },
  ]

  return (
    <>
      <nav className="desktop desktop-nav">
        <div className="grid">
          <Link href="/#" className="nav-logo">Honzoraptor's</Link>
        </div>
        <div className="gap-10 nav-links">
          {navLinks.map(({ text, linkHref }, i) => {
            return (
              <Link key={i} href={linkHref} className="relative nav-link align-center">{text}</Link>
            )
          })}
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