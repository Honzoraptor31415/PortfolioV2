import type { Metadata } from "next";
import { supabase } from "@/utils/supabase/server";
import ProjectsPage from "@/components/pages/Projects";

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
  const { data } = await supabase.from("projects").select();
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
    <ProjectsPage projects={projects} />
  )
}

export default Projects;
