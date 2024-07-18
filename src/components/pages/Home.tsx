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
    </>
  )
}

export default HomePage