"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import Link from "next/link";

function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [fadeAnimation, setFadeAnimation] = useState<boolean>(false);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setUser(null);
    if (!error) {
      redirect("/");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <nav id="desktop">
        <div className="nav-side">
          <Link href="/#" className="logo-text" data-title="Honzoraptor's">
            Honzoraptor's
          </Link>
        </div>
        <div className="nav-side desktop-menu">
          <div className="link-wrp">
            <Link href="/#about">About</Link>
          </div>
          <div className="link-wrp">
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="link-wrp">
            <Link href="/projects">Projects</Link>
          </div>
          <Link href="https://github.com/Honzoraptor31415">
            <img className="no-select" src="/github.svg" alt="Github icon" />
          </Link>
          {user && (
            <>
              <button className="outline-btn" onClick={signOut}>
                Sign out
              </button>
            </>
          )}
        </div>
      </nav>
      <div id="mobile">
        <nav>
          <Link href="/#" className="logo-text" data-title="Honzoraptor's">
            Honzoraptor's
          </Link>
          <div className="grid-wrp nav-side">
            <button
              className={`nav-menu-button nav-button grid-wrp ${
                fadeAnimation ? "nav-btn-fade-in" : ""
              }`}
              onClick={() => {
                setShowNav(!showNav);
                setFadeAnimation(true);
              }}
              onAnimationEnd={() => setFadeAnimation(false)}
            >
              <img src={showNav ? "/cross.svg" : "/menu.svg"} />
            </button>
          </div>
        </nav>
        <div
          className={`expanded ${
            showNav ? "expanded-shown" : "expanded-hidden"
          }`}
        >
          <div className="menu">
            <Link
              onClick={() => {
                setShowNav(false);
              }}
              href="/#about"
            >
              About
            </Link>
            <Link
              onClick={() => {
                setShowNav(false);
              }}
              href="/#contact"
            >
              Contact
            </Link>
            <Link
              onClick={() => {
                setShowNav(false);
              }}
              href="/projects"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
