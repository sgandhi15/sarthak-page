import { getProjectBySlug, getProjects, Project } from "@/app/data/projects";
import ProjectDetail from "../../../components/projects/project-detail";

export async function generateStaticParams() {
  const projects = getProjects(1, 1000); // Get all projects for static generation
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

interface ProjectParams {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectParams) {
  const project = getProjectBySlug(params.slug);
  return <ProjectDetail project={project} />;
}
