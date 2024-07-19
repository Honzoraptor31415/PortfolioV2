"use client"

import BlurryBackground from "../ui/BlurryBackground"
import BlurryMouseFollower from "../ui/BlurryMouseFollower"

function HomePage() {
  return (
    <>
      <BlurryMouseFollower />
      <header className="main-header">
        <div className="header-side flex-column gap-20 justify-center">
          <h1 className="gradient-text main-heading">Hey there!</h1>
          <p>Welcome to my portfolio website! I'm a dude from Czechia who likes to code stuff, mainly with Javascript. Here you can find some of my cool projects, so if you're interested, definitely <a href="/projects">go check them out</a>.</p>
        </div>
        <div className="header-side flex-end align-center">
          <BlurryBackground />
        </div>
      </header>
      <div className="home-main-wrp">
        <main className="home-main">
          <section className="home-section" id="about">
            <h2 className="gap-10 section-heading max-width-fit">About <a href="#about" className="section-link-self align-center"><img src="/link.svg" className="max-height-20" /></a></h2>
            <p className="home-section-text">As mentioned, I'm a programmer from the east of Czechia. I mainly focus on programming front-end of webapps using frameworks like SvelteKit or Next. My favorite framework as of now is SvelteKit, because it's got everything you need to build a fullstack webapp. But since I'm not good at building back-ends, I use BaaS's like Supabase to do the hard work for me.</p>
          </section>
        </main>
      </div>
    </>
  )
}

export default HomePage