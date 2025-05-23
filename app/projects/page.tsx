"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import SearchBar from "@/components/shared/search-bar";
import AnimateOnScroll from "@/components/shared/animate-on-scroll";
import { usePortfolio } from "@/components/providers";
import { fuzzySearch } from "@/utils/fuzzy-search";
import { getProjects, getTotalProjects, Project } from "@/app/data/projects";

const ITEMS_PER_PAGE = 9;

export default function ProjectsPage() {
  const { setCursorType } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    getProjects(1, ITEMS_PER_PAGE)
  );

  const totalProjects = getTotalProjects();
  const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE);

  const handleSearch = useCallback(
    (query: string) => {
      if (query === searchQuery) return;

      setSearchQuery(query);
      setCurrentPage(1);
      if (!query) {
        const projects = getProjects(1, ITEMS_PER_PAGE);
        setFilteredProjects(projects);
      } else {
        const allProjects = getProjects(1, totalProjects);
        const results = fuzzySearch(allProjects, query, [
          "title",
          "description",
          "tags",
        ]);
        setFilteredProjects(results.slice(0, ITEMS_PER_PAGE));
      }
    },
    [searchQuery, totalProjects]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (page === currentPage) return;

      setCurrentPage(page);

      if (!searchQuery) {
        const projects = getProjects(page, ITEMS_PER_PAGE);
        setFilteredProjects(projects);
      } else {
        const allProjects = getProjects(1, totalProjects);
        const results = fuzzySearch(allProjects, searchQuery, [
          "title",
          "description",
          "tags",
        ]);
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginatedResults = results.slice(start, end);
        setFilteredProjects(paginatedResults);
      }
    },
    [currentPage, searchQuery, totalProjects]
  );

  useEffect(() => {
    setFilteredProjects(getProjects(1, ITEMS_PER_PAGE));
  }, []);

  const paginatedProjects = filteredProjects;

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="mb-8">
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
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search projects by title, description, or technology..."
            />
          </AnimateOnScroll>

          {paginatedProjects.length === 0 ? (
            <AnimateOnScroll className="text-center py-12" delay={500}>
              <p className="text-gray-400">
                No projects found matching your search.
              </p>
            </AnimateOnScroll>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {paginatedProjects.map((project, index) => (
                <AnimateOnScroll
                  key={project.slug}
                  delay={300 + index * 200}
                  className="bg-[#1A1A1A] relative"
                >
                  <div className="relative overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0OD4wMDw4QEBAPj4+QEBAPj4+QEBAPj4+QED/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 font-jetbrains">
                      <Link
                        href={`/projects/${project.slug}`}
                        onMouseEnter={() => setCursorType("hover")}
                        onMouseLeave={() => setCursorType("default")}
                        className="hover:text-green-400 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#333] text-gray-300 px-2 py-1 text-xs font-space"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 font-space text-sm flex items-center hover:text-green-300 transition-colors"
                        onMouseEnter={() => setCursorType("hover")}
                        onMouseLeave={() => setCursorType("default")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        <span>View Code</span>
                      </Link>
                      {project.demo &&
                        project.demo !== "" &&
                        project.demo !== "#" && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 font-space text-sm flex items-center hover:text-green-300 transition-colors"
                            onMouseEnter={() => setCursorType("hover")}
                            onMouseLeave={() => setCursorType("default")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            <span>Live Demo</span>
                          </Link>
                        )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <AnimateOnScroll className="mt-12" delay={500}>
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-space text-sm ${
                    currentPage === 1
                      ? "bg-[#333] text-gray-500 cursor-not-allowed"
                      : "bg-[#1A1A1A] text-green-400 hover:text-green-300 hover:bg-[#222] transition-colors"
                  }`}
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg font-space text-sm ${
                        currentPage === page
                          ? "bg-green-400 text-[#121212]"
                          : "bg-[#1A1A1A] text-green-400 hover:text-green-300 hover:bg-[#222] transition-colors"
                      }`}
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-space text-sm ${
                    currentPage === totalPages
                      ? "bg-[#333] text-gray-500 cursor-not-allowed"
                      : "bg-[#1A1A1A] text-green-400 hover:text-green-300 hover:bg-[#222] transition-colors"
                  }`}
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Next
                </button>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>
    </div>
  );
}
