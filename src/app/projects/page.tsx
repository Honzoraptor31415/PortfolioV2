import type { Metadata } from "next";
import { supabase } from "@/utils/supabase/server";
import Project from "@/components/Project";

export const metadata: Metadata = {
  title: "Honzoraptor's projects",
  description: "Here you can see all of the projects I've coded so far.",
};

async function getProjects() {
  const { data } = await supabase.from("Projects").select();
  return data ?? [];
}

async function Projects() {
  const projects = await getProjects();
  return (
    <main className="nav-space-top projects">
      <h1>My projects</h1>
      <div className="projects-wrp">
        {projects?.length > 0 ? (
          <>
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.titleEn}
                  text={project.textEn}
                  imgUrl={project.img}
                  githubUrl={project.github}
                  link={project.link}
                  date={project.date}
                  tags={project.tags.split(" ")}
                  isWeb={project.web === "yes" ? true : false}
                  index={index}
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
  );
}

export default Projects;
