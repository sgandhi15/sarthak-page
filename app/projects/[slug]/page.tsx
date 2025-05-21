import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  Code,
  Server,
  Database,
  Layers,
} from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";

interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deployment?: string[];
  storage?: string[];
  content?: string[];
  testing?: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  slug: string;
  date: string;
  duration: string;
  role: string;
  client: string;
  detailedDescription: string;
  features: string[];
  challenges: string;
  techStack: TechStack;
  screenshots: Array<{ url: string; caption: string }>;
}

// This would typically come from a database or API
const projectsData: Project[] = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02) Study Notes",
    description:
      "A collection of study notes for the AWS Certified Cloud Practitioner (CLF-C02) certification exam.",
    image: "/placeholder.svg",
    tags: [
      "AWS",
      "Cloud",
      "Certification",
      "Study Notes",
      "Cloud Practitioner",
    ],
    github: "#",
    demo: "#",
    slug: "aws-clf-c02-notes",
    date: "March 2025",
    duration: "Ongoing",
    role: "Student",
    client: "Personal Project",
    detailedDescription: `
      This is my personal collection of study materials and notes for the AWS Certified Cloud Practitioner (CLF-C02) certification exam. 
      I created this repository to organize my learning journey and track my progress in understanding fundamental AWS cloud concepts, 
      services, and best practices.
      
      The repository is structured to cover all major domains of the AWS Certified Cloud Practitioner exam, including Cloud Concepts, 
      Security and Compliance, Technology, Billing and Pricing, and Support and Documentation.
    `,
    features: [
      "Comprehensive study notes on AWS services and concepts",
      "Exam preparation strategies and tips",
      "Important AWS terminology and definitions",
      "Best practices for cloud architecture",
      "Cost optimization and security considerations",
      "Regular updates as I continue learning",
    ],
    challenges: `
      The main challenge was organizing the vast amount of information in a way that's both comprehensive and easy to navigate. 
      I structured the content to build upon fundamental concepts while maintaining clear connections between related topics.
      
      Another challenge was keeping the content up-to-date with AWS's rapid pace of innovation and service updates. I implemented 
      a regular review process to ensure the information remains current and relevant.
    `,
    techStack: {
      frontend: ["Markdown", "GitHub Pages"],
      content: ["AWS Documentation", "Official Study Guide", "Practice Exams"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Study Notes Overview" },
      { url: "/placeholder.svg", caption: "Cloud Concepts Section" },
      { url: "/placeholder.svg", caption: "Security and Compliance Notes" },
      { url: "/placeholder.svg", caption: "Technology Domain Coverage" },
    ],
  },
  {
    title: "Blog Comments Application",
    description:
      "A blog comments application built with React, Redux, and Axios, showcasing best practices in state management, API integration, and component architecture.",
    image: "/placeholder.svg",
    tags: [
      "React",
      "Redux",
      "Redux Thunk",
      "Axios",
      "Lodash",
      "React Testing Library",
    ],
    github: "#",
    demo: "#",
    slug: "blog-comments-application",
    date: "July 2020",
    duration: "2 months",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
      A modern React-Redux application that demonstrates the implementation of a blog comments system with user interactions. 
      This project showcases best practices in state management, API integration, and component architecture using React and Redux.
      
      The application features a dynamic post listing with user information, Redux-powered state management, and asynchronous 
      data fetching using Redux Thunk. The codebase is organized with a clean and modular component architecture.
    `,
    features: [
      "Dynamic post listing with user information",
      "Redux-powered state management",
      "Asynchronous data fetching using Redux Thunk",
      "Clean and modular component architecture",
      "Responsive user interface",
      "Comprehensive testing with React Testing Library",
    ],
    challenges: `
      One of the main challenges was implementing efficient state management for nested comment threads. We solved this by 
      designing a normalized state structure and implementing custom selectors for data access.
      
      Another challenge was handling asynchronous operations and loading states. We implemented a robust error handling 
      system and loading indicators to provide a smooth user experience during data fetching.
    `,
    techStack: {
      frontend: ["React", "Redux", "Redux Thunk", "Axios", "Lodash"],
      testing: ["React Testing Library", "Jest"],
      deployment: ["GitHub Pages"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Post List View" },
      { url: "/placeholder.svg", caption: "Comment Thread" },
      { url: "/placeholder.svg", caption: "User Profile" },
      { url: "/placeholder.svg", caption: "Mobile Responsive Design" },
    ],
  },
];

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectParams {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/projects"
              className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-space text-sm">Back to Projects</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jetbrains">
                <GlitchText text={project.title} />
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {project.duration}
                </span>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="absolute top-0 left-0 bg-[#121212] px-2 py-1 z-10 -mt-2 ml-2">
                <span className="text-[10px] text-gray-500 font-space">
                  <span className="code-comment">// project.image</span>
                </span>
              </div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>

            <div className="flex justify-between mb-8">
              <div className="flex space-x-4">
                <Link
                  href={project.github}
                  className="bg-[#1A1A1A] p-2 text-green-400 hover:bg-green-400 hover:text-[#1A1A1A] transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={project.demo}
                  className="bg-[#1A1A1A] p-2 text-green-400 hover:bg-green-400 hover:text-[#1A1A1A] transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    Project Info
                  </span>
                </div>
                <h3 className="font-jetbrains text-green-400 mb-4">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.client:
                      </span>
                      Client
                    </span>
                    <span className="col-span-2">{project.client}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.role:
                      </span>
                      My Role
                    </span>
                    <span className="col-span-2">{project.role}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.date:
                      </span>
                      Date
                    </span>
                    <span className="col-span-2">{project.date}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.duration:
                      </span>
                      Duration
                    </span>
                    <span className="col-span-2">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    Tech Stack
                  </span>
                </div>
                <h3 className="font-jetbrains text-green-400 mb-4">
                  Technologies Used
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Code className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-bold">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Server className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-bold">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  {project.techStack.database && (
                    <div>
                      <div className="flex items-center mb-2">
                        <Database className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm font-bold">Database</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.database.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center mb-2">
                      <Layers className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-bold">Deployment</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.deployment?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">
                  // project.detailedDescription
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Project Overview
              </h2>
              <div className="prose prose-invert prose-green max-w-none font-space">
                {project.detailedDescription
                  .split("\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">// project.features</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Key Features
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300">
                    <span className="text-green-400">›</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">// project.challenges</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Challenges & Solutions
              </h2>
              <div className="prose prose-invert prose-green max-w-none font-space">
                {project.challenges
                  .split("\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">// project.screenshots</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Project Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot: any, index: number) => (
                  <div key={index} className="bg-[#1A1A1A] p-2 relative">
                    <Image
                      src={screenshot.url || "/placeholder.svg"}
                      alt={screenshot.caption}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-sm text-gray-400 mt-2">
                      {screenshot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="bg-transparent border border-green-400 text-green-400 px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-400/10 transition-colors mr-4"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
              <Link
                href={project.demo}
                className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
