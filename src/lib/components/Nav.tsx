"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/utils/supabase/client"
import { redirect } from "next/navigation"

function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false)
  const [user, setUser] = useState<any>()

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    console.log(error)
    setUser(null)
    if (!error) {
      redirect("/")
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <nav id="desktop">
        <div className="nav-side">
          <a href="/#" className="logo-text" data-title="Honzoraptor's">Honzoraptor's</a>
        </div>
        <div className="nav-side desktop-menu">
          <div className="link-wrp">
            <a href="/#about">About</a>
          </div>
          <div className="link-wrp">
            <a href="/#contact">Contact</a>
          </div>
          <div className="link-wrp">
            <a href="/projects">Projects</a>
          </div>
          <a href="https://github.com/Honzoraptor31415">
            <img className="no-select" src="/github.svg" alt="Github icon" />
          </a>
          {user && <>
            <button className="outline-btn" onClick={signOut}>Sign out</button>
          </>}
        </div>
      </nav>
      <div id="mobile">
        <nav>
          <a href="/#" className="logo-text" data-title="Honzoraptor's">Honzoraptor's</a>
          <div className="grid-wrp nav-side">
            <button className="nav-menu-button grid-wrp" onClick={() => { setShowNav(true) }}>
              <img src="/menu.svg" />
            </button>
          </div>
        </nav>
        <nav style={{ right: (showNav ? "0px" : "-100%") }} className="expanded">
          <div className="expanded-top">
            {user && <>
              <button className="signout-btn flex-center-verticall" onClick={signOut}>
                <img src="signout.svg" className="no-select signout-icon" />
              </button>
            </>}
            <button className="grid-wrp" onClick={() => { setShowNav(false) }}>
              <img src="cross.svg" className="no-select" />
            </button>
          </div>
          <div className="menu">
            <a onClick={() => { setShowNav(false) }} href="/#about">About</a>
            <a onClick={() => { setShowNav(false) }} href="/#contact">Contact</a>
            <a onClick={() => { setShowNav(false) }} href="/projects">Projects</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav