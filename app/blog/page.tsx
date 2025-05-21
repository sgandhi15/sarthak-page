"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import SearchBar from "@/components/shared/search-bar";
import { usePortfolio } from "@/components/providers";
import { fuzzySearch } from "@/utils/fuzzy-search";

// This would typically come from a database or API
const allBlogPosts = [
  {
    title: "Why Soft Skills are the Secret Sauce for Software Developers",
    excerpt:
      "Discover why soft skills are crucial for software developers and how they can enhance your career success.",
    image: "/placeholder.svg",
    date: "January 3, 2025",
    readTime: "8 min read",
    tags: [
      "Soft Skills",
      "Communication",
      "Teamwork",
      "Time Management",
      "Adaptability",
      "Emotional Intelligence",
      "Negotiation",
    ],
    slug: "why-soft-skills-are-the-secret-sauce-for-software-developers",
    content: `# Why Soft Skills are the Secret Sauce for Software Developers

## Introduction: The Power Behind the Code

In software development, it's easy to focus on the technical side: coding, frameworks, algorithms. But in reality, **soft skills**—communication, collaboration, and adaptability—are just as crucial. Think of them like the seasoning in a good stew: essential, but often overlooked.

In places like Newfoundland, we know the importance of community, adapting to change, and rolling with the punches. The same principles apply to being a great developer. Let's dive into why soft skills are key to success, whether you're working remotely or in the heart of a bustling tech hub.

## 1. Communication Skills: More Than Just "How's It Going?"

Good communication is at the heart of any great project. Whether you're explaining a bug to your team, presenting a solution to a client, or even documenting your code, the ability to clearly articulate ideas is essential. It's like explaining the perfect recipe—if you're too technical, people get lost. But when you break things down simply, everyone gets it. Clear communication helps you save time, avoid confusion, and make sure everyone's on the same page.

## 2. Teamwork: Because "Together" is Always Better

In tech, you're rarely ever alone. **Teamwork** is what transforms individual contributions into something greater. Whether you're working with other developers, designers, or product managers, collaboration is key to building solid solutions. It's like building a cabin together—each person has a vital role, and when everyone pitches in, you get a stronger end product.

## 3. Time Management: Avoiding the "Last-Minute Scramble"

Time management in software development is crucial. Whether you're working on a project with tight deadlines or balancing multiple tasks, keeping track of your time can make or break a project. Use tools like Trello, Jira, or even a simple to-do list to stay on top of your work. It's like managing a fishing trip: if you don't plan ahead, things can get chaotic. But when you know when to cast your line, you catch the biggest fish.

## 4. Adaptability: Rolling with the Punches

The tech world evolves faster than the weather in Newfoundland. One day you're working in one framework, the next you're learning something entirely new. Being **adaptable** is key to staying relevant. Embrace change, learn on the fly, and don't be afraid to pivot when necessary. It's like being prepared for a sudden rainstorm—stay flexible, and you'll be able to weather any storm.

## 5. Emotional Intelligence: Staying Cool When Things Go Wrong

Whether you're facing a tricky bug or a tight deadline, **emotional intelligence (EQ)** helps you navigate the ups and downs of software development. Managing your emotions and understanding others' perspectives can help keep the team morale high, even in stressful situations. It's like keeping your cool when the server crashes or the power goes out—staying calm helps you find the solution, and keeps the team moving forward.

## 6. Negotiation: Getting What You Want, Without the "Hard Sell"

Negotiation isn't just for salespeople. As a developer, you often find yourself negotiating timelines, features, or technical decisions. The key is to approach these conversations with respect and collaboration, not confrontation. It's like navigating a community potluck—everyone has different tastes, but finding a way to make everyone happy is what makes the experience worthwhile.

## Conclusion: The Right Blend for Success

Technical skills are important, but **soft skills** are what allow you to collaborate effectively, adapt to change, and handle the ups and downs of development. Whether you're debugging code, collaborating with a team, or managing deadlines, soft skills help you navigate the challenges of the development world with confidence.

Just like a well-cooked stew, it's the right combination of skills that makes a great developer. So, invest in your soft skills, and you'll find yourself thriving not just as a coder, but as a collaborator, communicator, and problem-solver.

## Call to Action:

Start honing your **soft skills** today. Whether it's improving your communication, time management, or emotional intelligence, these skills will make a huge difference in your career. So go ahead—take the time to build them. And remember, like any great project, success in software development is about balance: technical proficiency and soft skills working hand in hand.`,
  },
];

export default function BlogPage() {
  const { setCursorType } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredPosts(allBlogPosts);
    } else {
      const results = fuzzySearch(allBlogPosts, query, [
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

          <SearchBar
            onSearch={handleSearch}
            placeholder="Search articles by title, content, or tag..."
          />

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">
                No articles found matching "{searchQuery}"
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
                        <span
                          key={tagIndex}
                          className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
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
  );
}
