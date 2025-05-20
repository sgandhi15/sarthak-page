"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePortfolio } from "@/components/providers"
import GlitchText from "@/components/shared/glitch-text"
import ScrambleText from "@/components/shared/scramble-text"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

export default function ProjectsPreview() {
  const { setCursorType } = usePortfolio()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      slug: "e-commerce-platform",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      demo: "#",
      slug: "task-management-app",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative">
          <div className="text-xs text-gray-500 font-space mb-1">
            <span className="code-comment">{`<Section id="projects-preview" component="ProjectsPreview" />`}</span>
          </div>
          <span className="font-space text-green-400 mb-2 inline-block">
            <span className="text-gray-500">// What I've Built</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <GlitchText text="Featured Projects" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3">
                    <Link
                      href={project.github}
                      className="bg-[#1E1E1E] p-2 text-green-400 hover:bg-green-400 hover:text-[#1E1E1E] transition-colors"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={project.demo}
                      className="bg-[#1E1E1E] p-2 text-green-400 hover:bg-green-400 hover:text-[#1E1E1E] transition-colors"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-jetbrains">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-green-400 transition-colors"
                    onMouseEnter={() => setCursorType("hover")}
                    onMouseLeave={() => setCursorType("default")}
                  >
                    <ScrambleText text={project.title} />
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <p className="text-xs text-gray-500 font-space mb-2">
                  <span className="code-comment">// projects[{index}].description</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-green-400 font-space text-sm flex items-center hover:text-green-300 transition-colors"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <span>View Details</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-1000">
          <Link
            href="/projects"
            className="bg-transparent border border-green-400 text-green-400 px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-400/10 transition-colors"
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("default")}
          >
            <ScrambleText text="View All Projects" />
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
