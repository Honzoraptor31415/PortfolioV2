import type { Metadata } from "next";
import { supabase } from "@/utils/supabase/server";
import Project from "@/components/Project";

export const metadata: Metadata = {
  title: "Honzoraptor's projects",
  description: "Here you can see all of the projects I've coded so far.",
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getProjects() {
  const { data } = await supabase.from("Projects").select();
  if (data) {
    data.sort((a: any, b: any) => {
      try {
        return (
          new Date(
            `${b.date.split(".")[0]} ${months[b.date.split(".")[1] - 1]
            }, ${b.date.split(".")[2].slice(1)}`
          ).valueOf() -
          new Date(
            `${a.date.split(".")[0]} ${months[a.date.split(".")[1] - 1]
            }, ${a.date.split(".")[2].slice(1)}`
          ).valueOf()
        );
      } catch (error) {
        console.error("An error occured while sorting the projects:", error);
        return 0;
      }
    });

    return data;
  }
}

async function Projects() {
  const projects = (await getProjects()) ?? [];
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
  );
}

export default Projects;
