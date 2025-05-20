"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react"
import GlitchText from "@/components/shared/glitch-text"
import SearchBar from "@/components/shared/search-bar"
import { usePortfolio } from "@/components/providers"
import { fuzzySearch } from "@/utils/fuzzy-search"

// This would typically come from a database or API
const allBlogPosts = [
  {
    title: "Building Responsive UIs with React and Tailwind",
    excerpt: "Learn how to create beautiful, responsive user interfaces using React and Tailwind CSS.",
    image: "/placeholder.svg",
    date: "May 15, 2024",
    readTime: "5 min read",
    tags: ["React", "Tailwind", "UI/UX"],
    slug: "building-responsive-uis",
    content: "This is a placeholder for the full blog content...",
  },
  {
    title: "The Power of TypeScript in Modern Web Development",
    excerpt: "Discover how TypeScript can improve your development workflow and help catch errors early.",
    image: "/placeholder.svg",
    date: "April 28, 2024",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
    slug: "power-of-typescript",
    content: "This is a placeholder for the full blog content...",
  },
  {
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Explore techniques to optimize your Next.js applications for better performance and user experience.",
    image: "/placeholder.svg",
    date: "April 10, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "Performance", "Optimization"],
    slug: "optimizing-nextjs-applications",
    content: "This is a placeholder for the full blog content...",
  },
  {
    title: "Creating Custom Hooks in React",
    excerpt: "Learn how to create and use custom hooks to share logic between components in React.",
    image: "/placeholder.svg",
    date: "March 22, 2024",
    readTime: "6 min read",
    tags: ["React", "Hooks", "JavaScript"],
    slug: "creating-custom-hooks",
    content: "This is a placeholder for the full blog content...",
  },
  {
    title: "Introduction to Server Components in Next.js",
    excerpt: "Explore the new Server Components feature in Next.js and how it can improve your application.",
    image: "/placeholder.svg",
    date: "March 5, 2024",
    readTime: "9 min read",
    tags: ["Next.js", "React", "Server Components"],
    slug: "server-components-nextjs",
    content: "This is a placeholder for the full blog content...",
  },
  {
    title: "Building a Full-Stack Application with Next.js and MongoDB",
    excerpt: "A step-by-step guide to building a full-stack application using Next.js and MongoDB.",
    image: "/placeholder.svg",
    date: "February 18, 2024",
    readTime: "12 min read",
    tags: ["Next.js", "MongoDB", "Full-Stack"],
    slug: "fullstack-nextjs-mongodb",
    content: "This is a placeholder for the full blog content...",
  },
]

export default function BlogPage() {
  const { setCursorType } = usePortfolio()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (!query) {
      setFilteredPosts(allBlogPosts)
    } else {
      const results = fuzzySearch(allBlogPosts, query, ["title", "excerpt", "tags"])
      setFilteredPosts(results)
    }
  }

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
                <span className="text-gray-500">// Developer Insights</span>
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">
                <GlitchText text="Blog & Articles" />
              </h1>
              <div className="text-xs text-gray-500 font-space mt-2">
                <span className="code-comment">{`<Section id="blog" component="BlogPage" />`}</span>
              </div>
            </div>
          </div>

          <SearchBar onSearch={handleSearch} placeholder="Search articles by title, content, or tag..." />

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">No articles found matching "{searchQuery}"</p>
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
              {filteredPosts.map((post, index) => (
                <div key={index} className="bg-[#1A1A1A] relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={340}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-green-400 text-[#121212] px-3 py-1 font-space text-xs">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <div className="absolute top-0 right-0 bg-[#1A1A1A] px-2 py-1 z-10">
                      <span className="text-[10px] text-gray-500 font-space">
                        <span className="code-comment">{`posts[${index}]`}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-3 text-xs text-gray-400">
                      <span className="flex items-center mr-4">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.tags[0]}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 font-jetbrains">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-green-400 transition-colors"
                        onMouseEnter={() => setCursorType("hover")}
                        onMouseLeave={() => setCursorType("default")}
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">{`posts[${index}].excerpt`}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-green-400 font-space text-sm flex items-center hover:text-green-300 transition-colors"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                    >
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
