"use client"

import Project from "@/components/Project";
import { DBProject } from "@/lib/types/db";

function Projects({ projects }: any) {
  return (
    <main className="nav-space-top projects">
      <h1>My projects</h1>
      <div className="projects-wrp">
        {projects?.length > 0 ? (
          <>
            {projects.map((project: DBProject, index: number) => {
              return (
                <Project
                  key={index}
                  title={project.titleEn}
                  text={project.textEn}
                  imgUrl={project.imgUrl}
                  githubUrl={project.githubUrl}
                  link={project.linkUrl}
                  date={project.date}
                  tags={project.tags.split(" ")}
                  isWeb={project.isWeb}
                  id={project.id}
                />
              );
            })}
          </>
        ) : (
          <>
            <h1>No projects</h1>
          </>
        )}
      </div>
    </main>
  )
}

export default Projects