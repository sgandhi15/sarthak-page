"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import SearchBar from "@/components/shared/search-bar";
import AnimateOnScroll from "@/components/shared/animate-on-scroll";
import { usePortfolio } from "@/components/providers";
import { fuzzySearch } from "@/utils/fuzzy-search";
import { getBlogPosts } from "@/app/data/blog";

export default function BlogPage() {
  const { setCursorType } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(getBlogPosts());

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredPosts(getBlogPosts());
    } else {
      const results = fuzzySearch(getBlogPosts(), query, [
        "title",
        "excerpt",
        "tags",
      ]);
      setFilteredPosts(results);
    }
  };

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
                <span className="text-gray-500">// Latest Articles</span>
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">
                <GlitchText text="Blog" />
              </h1>
              <div className="text-xs text-gray-500 font-space mt-2">
                <span className="code-comment">{`<Section id="blog" component="BlogPage" />`}</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search articles by title, content, or tags..."
            />
          </AnimateOnScroll>

          {filteredPosts.length === 0 ? (
            <AnimateOnScroll className="text-center py-12" delay={500}>
              <p className="text-gray-400">
                No articles found matching your search.
              </p>
            </AnimateOnScroll>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredPosts.map((post, index) => (
                <AnimateOnScroll
                  key={post.slug}
                  delay={300 + index * 200}
                  className="bg-[#1A1A1A] relative"
                >
                  <div className="relative overflow-hidden group">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={340}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0OD4wMDw4QEBAPj4+QEBAPj4+QEBAPj4+QED/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </span>
                    </div>

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

                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#333] text-gray-300 px-2 py-1 text-xs font-space"
                        >
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
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
