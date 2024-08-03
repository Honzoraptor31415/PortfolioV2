"use client"

import { socials } from "@/lib/constants/app"
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
        <button className="grid no-style" onClick={() => setIsMenuShown(!isMenuShown)}>
          <img src={isMenuShown ? "/cross.svg" : "/menu.svg"} className="max-height-20" />
        </button>
      </nav>
      <div className="mobile-nav-menu mobile main-bg-transparent" style={{ bottom: isMenuShown ? "0px" : "-100svh" }}>
        <div className="max-h-fit flex-center-all">
          <div className="flex-column gap-10 w-full">
            {navLinks.map(({ text, linkHref }, i) => {
              return (
                <Link onClick={() => {
                  setIsMenuShown(false)
                }} key={i} href={linkHref} className="relative nav-link text-center">{text}</Link>
              )
            })}
          </div>
        </div>
        <div className="flex-wrp gap-10 justify-center mobile-nav-socials">
          {socials.map(({ linkUrl, iconUrl }, i) => {
            return (
              <Link key={i} href={linkUrl} target="_blank" className="no-style grid socials-link active-opacity">
                <img src={iconUrl} className="no-select" />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Nav