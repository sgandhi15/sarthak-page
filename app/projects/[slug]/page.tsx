import { useState, Suspense, lazy } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import { usePortfolio } from "@/components/providers";
import { getProjectBySlug, getProjects, Project } from "@/app/data/projects";

// Lazy load components
const ProjectFeatures = lazy(
  () => import("@/components/projects/project-features")
);
const ProjectChallenges = lazy(
  () => import("@/components/projects/project-challenges")
);
const ProjectTechStack = lazy(
  () => import("@/components/projects/project-tech-stack")
);
const ProjectScreenshots = lazy(
  () => import("@/components/projects/project-screenshots")
);

interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deployment?: string[];
  storage?: string[];
  content?: string[];
  testing?: string[];
  styling?: string[];
  tools?: string[];
  security?: string[];
  ui?: string[];
  hooks?: string[];
  apis?: string[];
}

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
  const { setCursorType } = usePortfolio();
  const [isLoading, setIsLoading] = useState(true);
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/projects"
            className="text-green-400 hover:text-green-300 transition-colors"
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("default")}
          >
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={() => setCursorType("default")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-space text-sm">Back to Projects</span>
            </Link>

            <div className="mb-12">
              <span className="font-space text-green-400 mb-2 inline-block">
                <span className="text-gray-500">// Project Details</span>
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">
                <GlitchText text={project.title} />
              </h1>
              <div className="text-xs text-gray-500 font-space mt-2">
                <span className="code-comment">{`<Project id="${project.slug}" />`}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    loading="eager"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0OD4wMDw4QEBAPj4+QEBAPj4+QEBAPj4+QED/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="bg-[#1E1E1E] px-4 py-2 text-green-400 hover:bg-green-400 hover:text-[#1E1E1E] transition-colors flex items-center"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href={project.demo}
                      className="bg-[#1E1E1E] px-4 py-2 text-green-400 hover:bg-green-400 hover:text-[#1E1E1E] transition-colors flex items-center"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span>Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Suspense
                fallback={<div className="mt-8">Loading features...</div>}
              >
                <ProjectFeatures features={project.features} />
              </Suspense>

              <Suspense
                fallback={<div className="mt-8">Loading challenges...</div>}
              >
                <ProjectChallenges challenges={project.challenges} />
              </Suspense>

              <Suspense
                fallback={<div className="mt-8">Loading tech stack...</div>}
              >
                <ProjectTechStack techStack={project.techStack} />
              </Suspense>

              <Suspense
                fallback={<div className="mt-8">Loading screenshots...</div>}
              >
                <ProjectScreenshots screenshots={project.screenshots} />
              </Suspense>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#1A1A1A] rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-500 text-sm">Duration</span>
                    <p className="text-gray-400">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Role</span>
                    <p className="text-gray-400">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Client</span>
                    <p className="text-gray-400">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Date</span>
                    <p className="text-gray-400">{project.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
