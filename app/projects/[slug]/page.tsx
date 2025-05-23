import { getProjectBySlug, getProjects, Project } from "@/app/data/projects";
import ProjectDetail from "@/components/projects/project-detail";

interface ProjectParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getProjects(1, 1000); // Get all projects for static generation
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return <ProjectDetail project={project} />;
}
