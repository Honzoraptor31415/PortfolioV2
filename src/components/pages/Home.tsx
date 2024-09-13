"use client"

import BlurryBackground from "../ui/BlurryBackground"
import skills from "@/lib/constants/skills"

function HomePage() {
  return (
    <>
      <div>
        <header className="main-header">
          <div className="header-side flex flex-col gap-2 justify-center">
            <h1 className="gradient-text text-[2.4rem]">Hey there!</h1>
            <p>Welcome to my portfolio website! I'm a dude from Czechia who likes to code stuff, mainly with JavaScript. Here you can find some of my cool projects that I've made so far.</p>
            <a href="/projects" className="button primary-button max-w-fit mt-2">View projects</a>
          </div>
          <div className="header-side flex items-center">
            <BlurryBackground />
          </div>
        </header>
        <div className="home-main-wrp">
          <main className="home-main flex flex-col">
            <section className="home-section" id="about">
              <h2 className="flex gap-2.5 section-heading max-w-fit">About <a href="#about" className="section-link-self flex items-center">
                <img src="/link.svg" className="max-h-6" alt="" />
              </a></h2>
              <p className="home-section-text">As mentioned, I'm a programmer from the east of Czechia. I mainly focus on programming front-end of webapps using frameworks like SvelteKit or Next. My favorite framework as of now is SvelteKit, because it's got everything you need to build a fullstack webapp. But since I'm not good at building back-ends, I use BaaS's like Supabase to do the hard work for me.</p>
              <p className="home-section-text">
                Other than web development, I also know basics of game development using Godot 4 game engine with GDScript. Actually, I'm planning on making some 2D games in the near future, so stay tuned!
              </p>
            </section>
            <section className="home-section" id="skills">
              <h2 className="flex gap-2.5 section-heading max-w-fit">Skills overview <a href="#skills" className="section-link-self flex items-center"><img src="/link.svg" className="max-h-6" alt="" /></a></h2>
              <p className="home-section-text">Frontend:</p>
              <div className="flex gap-2.5 home-skill-icons">
                {skills.map((skill, i) => {
                  if (skill.type === "frontend") {
                    return <img key={i} src={`/skill-icons/${skill.id}.svg`} alt={skill.id} className="no-select" />
                  }
                })}
              </div>
              <p className="home-section-text">Backend / BaaS:</p>
              <div className="flex gap-2.5 home-skill-icons">
                {skills.map((skill, i) => {
                  if (skill.type === "backend") {
                    return <img key={i} src={`/skill-icons/${skill.id}.svg`} alt={skill.id} className="no-select" />
                  }
                })}
              </div>
              <p className="home-section-text">Design:</p>
              <div className="flex gap-2.5 home-skill-icons">
                {skills.map((skill, i) => {
                  if (skill.type === "design") {
                    return <img key={i} src={`/skill-icons/${skill.id}.svg`} alt={skill.id} className="no-select" />
                  }
                })}
              </div>
              <p className="home-section-text">Game development:</p>
              <div className="flex gap-2.5 home-skill-icons">
                {skills.map((skill, i) => {
                  if (skill.type === "game") {
                    return <img key={i} src={`/skill-icons/${skill.id}.svg`} alt={skill.id} className="no-select" />
                  }
                })}
              </div>
              <p className="home-section-text">Other tools/langs:</p>
              <div className="flex gap-2.5 home-skill-icons">
                {skills.map((skill, i) => {
                  if (skill.type === "other") {
                    return <img key={i} src={`/skill-icons/${skill.id}.svg`} alt={skill.id} className="no-select" />
                  }
                })}
              </div>
            </section>
            <section className="home-section" id="projects">
              <h2 className="flex gap-2.5 section-heading max-w-fit">Projetcs</h2>
              <p className="home-section-text">You can find all of my projects <a href="/projects">right here</a>.</p>
            </section>

            {/* <section className="home-section" id="contact">
              <h2 className="flex gap-2.5 section-heading max-w-fit">Where you can find me <a href="#contact" className="section-link-self flex items-center"><img src="/link.svg" className="max-h-6" /></a></h2>
              <div className="home-space-inline contact-grid"></div>
            </section> */}

          </main>
        </div>
      </div>
    </>
  )
}

export default HomePage