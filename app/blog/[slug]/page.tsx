import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import { getBlogPosts } from "@/app/data/blog";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogPosts = getBlogPosts();
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = params;
  const blogPosts = getBlogPosts();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="font-space text-sm">Back to Blog</span>
        </Link>
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
          style={{ objectPosition: "center" }}
        />
        <h1 className="text-4xl font-bold mb-2 font-jetbrains text-white">
          <GlitchText text={post.title} />
        </h1>
        <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-2">
          <span className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#232323] text-green-400 px-2 py-1 rounded text-xs font-medium font-space"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-300 mb-2 font-space">{post.excerpt}</p>
      </header>

      {/* Content */}
      <section
        className="prose prose-invert prose-green prose-img:rounded-xl prose-img:shadow-lg prose-headings:font-semibold prose-headings:text-gray-100 prose-p:text-gray-200 max-w-none font-space"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer actions (optional) */}
      <footer className="flex justify-between mt-12 border-t border-[#232323] pt-6">
        <div className="flex space-x-4">
          <button className="text-gray-400 hover:text-green-400 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-green-400 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
        {/* Add author info, next/prev navigation, etc. here if desired */}
      </footer>
    </article>
  );
}
