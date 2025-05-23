"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/shared/animate-on-scroll";
import { getFeaturedBlogPosts } from "@/app/data/blog";
import { usePortfolio } from "@/components/providers";
import GlitchText from "@/components/shared/glitch-text";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogPreview() {
  const { setCursorType } = usePortfolio();
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="font-space text-green-400 mb-2 inline-block">
              <span className="text-gray-500">// Latest Articles</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GlitchText text="Latest Articles" />
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights and thoughts on software development, career growth, and
              industry trends.
            </p>
          </div>
        </AnimateOnScroll>

        <div
          className={`grid gap-8 ${
            featuredPosts.length === 1
              ? "max-w-2xl mx-auto"
              : featuredPosts.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {featuredPosts.map((post, index) => (
            <AnimateOnScroll key={post.slug} delay={index * 200}>
              <article className="bg-[#1A1A1A] relative h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={340}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0OD4wMDw4QEBAPj4+QEBAPj4+QEBAPj4+QED/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 font-jetbrains">
                    <Link
                      href={`/blog/${post.slug}`}
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                      className="hover:text-green-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime} min read
                    </div>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] text-green-400 rounded-lg hover:text-green-300 hover:bg-[#222] transition-colors duration-300 font-space"
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("default")}
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
