"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import SearchBar from "@/components/shared/search-bar";
import { usePortfolio } from "@/components/providers";
import { fuzzySearch } from "@/utils/fuzzy-search";

// This would typically come from a database or API
const allProjects = [
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
  },
];

export default function ProjectsPage() {
  const { setCursorType } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredProjects(allProjects);
    } else {
      const results = fuzzySearch(allProjects, query, [
        "title",
        "description",
        "tags",
      ]);
      setFilteredProjects(results);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-space text-sm">Back to Home</span>
            </Link>

            <div className="mb-12 text-center">
              <span className="font-space text-green-400 mb-2 inline-block">
                <span className="text-gray-500">// What I've Built</span>
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">
                <GlitchText text="My Projects" />
              </h1>
              <div className="text-xs text-gray-500 font-space mt-2">
                <span className="code-comment">{`<Section id="projects" component="ProjectsPage" />`}</span>
              </div>
            </div>
          </div>

          <SearchBar
            onSearch={handleSearch}
            placeholder="Search projects by title, description, or technology..."
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">
                No projects found matching "{searchQuery}"
              </p>
              <button
                className="text-green-400 hover:text-green-300 transition-colors"
                onClick={() => handleSearch("")}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="bg-[#1A1A1A] relative">
                  <div className="absolute top-0 left-0 bg-[#1A1A1A] px-2 py-1 z-10 -mt-2 ml-2">
                    <span className="text-[10px] text-gray-500 font-space">
                      <span className="code-comment">{`projects[${index}]`}</span>
                    </span>
                  </div>
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
                    <h2 className="text-xl font-bold mb-2 font-jetbrains">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-green-400 transition-colors"
                        onMouseEnter={() => setCursorType("hover")}
                        onMouseLeave={() => setCursorType("default")}
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">{`projects[${index}].description`}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                        >
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
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
