import Error from "@/components/pages/Error"
import Project from "@/components/projects/Project"
import { months } from "@/lib/constants/app"
import { DbProject } from "@/lib/types/db"
import { createClient } from "@/utils/supabase/server"
import { useState } from "react"

async function page() {
  const supabase = createClient()

  const { data: projects, error } = await supabase.from("projects").select()

  if (projects) {
    projects.sort((a: any, b: any) => {
      try {
        return new Date(`${b.date.split(".")[0]} ${months[b.date.split(".")[1] - 1]}, ${b.date.split(".")[2].slice(1)}`).valueOf() - new Date(`${a.date.split(".")[0]} ${months[a.date.split(".")[1] - 1]}, ${a.date.split(".")[2].slice(1)}`).valueOf()
      } catch (error) {
        console.error('An error occured while sorting the projects:', error)
        return 0
      }
    })
  }

  return (
    error ? <Error code={Number(error.code)} message={error.message} /> : (
      <main className="min-h-screen">
        <div className="justify-center projects-top">
          <h1>Projects</h1>
        </div>
        <div className="projects-wrp gap-30 flex-column">
          {projects.length > 0 ? (
            <>
              {projects.map((project, i) => {
                return <Project key={i} id={project.id} date={project.date} imgUrl={project.imgUrl} githubUrl={project.githubUrl} linkUrl={project.linkUrl} tags={project.tags} textCz={project.textCz} textEn={project.textEn} titleCz={project.titleCz} titleEn={project.titleEn} isWeb={project.isWeb} />
              })}
            </>
          ) :
            <div className="flex-center-all">
              <h2>No projects...</h2>
            </div>
          }
        </div>
      </main>
    )
  )
}

export default page