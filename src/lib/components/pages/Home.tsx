"use client"

import { useEffect } from "react"
import BlurryBackground from "@/lib/components/BlurryBackground"
import { contactInfo, skills } from "@/lib/constants"
import Link from "next/link"

function Home() {
  useEffect(() => {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    })

    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((element) => animationObserver.observe(element))
  }, [])

  return (
    <>
      <header>
        <BlurryBackground />
        <div className="header-side header-left hidden">
          <h1>What's up!</h1>
          <p className="header-about">This is a small portfolio website made by <a href="https://github.com/Honzoraptor31415" target="_blank" className="colored-text">Honzoraptor</a>. Whenever I code something, you'll find it here.</p>
          <div className="primary-btn-wrp">
            <a href="/projects" className="primary-btn span-move-btn">
              My projects <span>→</span>
            </a>
          </div>
        </div>
        <div className="header-side hidden">
          <div className="langs-tech">
            {skills.map(({ id }, index) => {
              return (
                <Link key={index} href={`#${id}`}>
                  <img src={`./skill-icons/${id}.svg`} alt={id} className="no-select" />
                </Link>
              )
            })}
            <p className="langs-tech-above flex-center-all">Skills <span className="pointer-finger">👆</span></p>
          </div>
        </div>
      </header>
      <main>
        <section className="hidden">
          <h2 id="about">About me</h2>
          <p className="about-text">
            I'm a random guy in the east of Czechia in Europe. I started learning to code in the beginning of the year 2023. I started with <span className="html">HTML</span> and <span className="css">CSS</span> and later learned other languages, frameworks and technologies. More on that later, <a className="colored-text" href="#langs-techs">keep scrolling</a>!
          </p>
        </section>
        <section>
          <h2 className="hidden" id="langs-techs">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Jazyky a technologie" : "Languages and technologies"}</h2>

          {skills.map(({ name, id, description }, index) => {
            return (
              <div key={index} id={id} className="langs-sec-border hidden">
                <section className="langs-section">
                  <div className="langs-section-top">
                    <h3>{name} <img className="no-select" src={`./skill-icons/${id}.svg`} alt={`${name} icon`} /></h3>
                  </div>
                  <p>
                    {description}
                  </p>
                </section>
              </div>
            )
          })}

        </section>
        <section className="hidden" id="contact">
          <h2>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Kde mě najdeš" : "You can also find me here"}</h2>
          <div className="contact-socials-wrp">
            {contactInfo.map(({ name, url, username, id, elementClass }, index) => {
              return (
                <a key={index} target="_blank" href={url} className={`socel-container hidden ${elementClass}`}>
                  <div className="socel-wrp">
                    <img className="no-select" src={`./${id}.svg`} alt="Itch icon" />
                    <div className="socials-element">
                      <h3>{name}</h3>
                      <p>{username}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home