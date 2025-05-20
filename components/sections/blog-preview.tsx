"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePortfolio } from "@/components/providers"
import GlitchText from "@/components/shared/glitch-text"
import ScrambleText from "@/components/shared/scramble-text"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"

export default function BlogPreview() {
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

  const blogPosts = [
    {
      title: "Building Responsive UIs with React and Tailwind",
      excerpt: "Learn how to create beautiful, responsive user interfaces using React and Tailwind CSS.",
      image: "/placeholder.svg",
      date: "May 15, 2024",
      readTime: "5 min read",
      tags: ["React", "Tailwind", "UI/UX"],
      slug: "building-responsive-uis",
    },
    {
      title: "The Power of TypeScript in Modern Web Development",
      excerpt: "Discover how TypeScript can improve your development workflow and help catch errors early.",
      image: "/placeholder.svg",
      date: "April 28, 2024",
      readTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      slug: "power-of-typescript",
    },
  ]

  return (
    <section ref={sectionRef} id="blog" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative">
          <div className="text-xs text-gray-500 font-space mb-1">
            <span className="code-comment">{`<Section id="blog-preview" component="BlogPreview" />`}</span>
          </div>
          <span className="font-space text-green-400 mb-2 inline-block">
            <span className="text-gray-500">// My Thoughts</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <GlitchText text="Latest Blog Posts" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative"
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
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

                <h3 className="text-xl font-bold mb-3 font-jetbrains">
                  <Link
                    href={`/blog/${post.slug}`}
                    onMouseEnter={() => setCursorType("hover")}
                    onMouseLeave={() => setCursorType("default")}
                    className="hover:text-green-400 transition-colors"
                  >
                    <ScrambleText text={post.title} />
                  </Link>
                </h3>
                <div className="text-xs text-gray-500 font-space mb-1">
                  <span className="code-comment">// posts[{index}].excerpt</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

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

        <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-1000">
          <Link
            href="/blog"
            className="bg-transparent border border-green-400 text-green-400 px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-400/10 transition-colors"
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("default")}
          >
            <ScrambleText text="View All Posts" />
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
