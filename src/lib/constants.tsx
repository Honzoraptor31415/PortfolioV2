import type { skill } from "@/lib/types/app"
import Link from "next/link"

export const skills: skill[] = [
  {
    id: "html",
    name: "HTML",
    iconURL: "",
    description: (
      <>
        HTML was Like the first ever language that I learned and it's not even an actual programming language, but rather a markup language. But at the time I wrote my first lines of HTML, i didn't really care, nor knew what is the difference between a markup language and a programming language.
      </>
    )
  },
  {
    id: "css",
    name: "CSS",
    iconURL: "",
    description: (
      <>
        For kind of a long time after learning HTML, I've been using it without much styling and I found CSS really confusing. But after learning it and even sometimes struggling, I think became a pro at it.
      </>
    )
  },
  {
    id: "js",
    name: "JavaScript",
    iconURL: "",
    description: (
      <>
        The first ever actual programming language I learned. And I think it's one of the <b>best</b> languages out there, even tho it's sometimes confusing because of stuff like <span className="code">0.1 + 0.2</span> (if you don't know the story behind this, try co paste this in the console 😉).
      </>
    )
  },
  {
    id: "ts",
    name: "TypeScript",
    iconURL: "",
    description: (
      <>
        Just JavaScript, but slightly better, because of types and a few more things (like warning you about undeclared variables in the code editor). I learned it pretty quick, even tho I had some troubles learning it because I first used it with React and for some reason it kept telling me that ex. method `toLowerCase()` doesn't exist on type `string` and other things, which were caused by my tsconfig having an old version of TypeScript.
      </>
    )
  },
  {
    id: "react",
    name: "React",
    iconURL: "",
    description: (
      <>
        When I made my first React app, I felt the power of it and despite having troubles when first using useStates and useEffects, I like it. My previous portfolio was made with just React, which was not really good, because it didn't support ex. SSR. However now I'm using React with NextJS and it's a pretty good combo!
      </>
    )
  },
  {
    id: "nextjs",
    name: "NextJS",
    iconURL: "",
    description: (
      <>
        A framework for React, that I started using at the end of March 2024. When using it, you can tell that it's better than React, because it has stuff like filesystem-based routing, SSR or files like <span className="code">page.js</span> or <span className="code">layout.js</span>, similarly how SvelteKit has. As I said, this portfolio is made with NextJS.
      </>
    )
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    iconURL: "",
    description: (
      <>
        Is commonly refered to as the most loved Javascript library. And I understand why: when writing Svelte/SvelteKit code, you feel like you're writing some boosted HTML, that can do conditional component rendering, rendering arrays and writing down variables directly into the markup code. It's way easier to learn compared to React, but it's community isn't as big.
      </>
    )
  },
  {
    id: "git",
    name: "Git",
    iconURL: "",
    description: (
      <>
        Another step to being a good developer is to learn Git and Github (or GitLab/BitBucket, but Github is the most used one). I started learning Git just around November 2023 (which is kinda late in my opinion) and it was one of the best things I've done in my life.
      </>
    )
  },
  {
    id: "python",
    name: "Python",
    iconURL: "",
    description: (
      <>
        I started to be more interested in programming at this point and wanted to try something new. I wrote my first lines of Python code in a web-based IDE on <Link href="https://www.w3schools.com/python/default.asp">W3Schools.com</Link>
      </>
    )
  },
  {
    id: "supabase",
    name: "Supabase",
    iconURL: "",
    description: (
      <>
        A widely used Firebase alternative, which I sarted using at the beginning of January 2024, because I wanted to connect my previous portfolio to a database: first I tried Firebase, but it didn't work out well with React, so that's why Supabase. Also I think, that Supabase is the <b>best BaaS</b> out there.
      </>
    )
  },
  {
    id: "appwrite",
    name: "Appwrite",
    iconURL: "",
    description: (
      <>
        Because mastering two BaaSes is not enough, in the beginning of March 2024 I learned to work with Appwrite. I also did it, because SvelteKit didn't work as good as it should with Firebase. And when I tried SvelteKit with Appwrite, it was wonderful, easy and mainly without any glitches.
      </>
    )
  },
]