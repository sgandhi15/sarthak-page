import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogPosts = [
    {
      slug: "why-soft-skills-are-the-secret-sauce-for-software-developers",
    },
    {
      slug: "power-of-typescript",
    },
    {
      slug: "optimizing-nextjs-applications",
    },
    {
      slug: "creating-custom-hooks-in-react",
    },
  ];

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const blogPosts = [
    {
      title: "Why Soft Skills are the Secret Sauce for Software Developers",
      excerpt:
        "Learn how to create beautiful, responsive user interfaces using React and Tailwind CSS.",
      image: "/placeholder.svg",
      date: "January 3, 2025",
      readTime: "5 min read",
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
      content: `
        <p>Creating responsive user interfaces is essential for modern web applications. With React and Tailwind CSS, you can build beautiful, responsive UIs with ease.</p>
        
        <h2>Why React and Tailwind?</h2>
        
        <p>React provides a component-based architecture that makes it easy to build reusable UI components. Tailwind CSS, on the other hand, provides a utility-first approach to styling that allows you to build custom designs without leaving your HTML.</p>
        
        <p>Together, they form a powerful combination for building responsive UIs.</p>
        
        <h2>Getting Started</h2>
        
        <p>To get started with React and Tailwind, you'll need to set up a new React project and install Tailwind CSS. Here's how:</p>
        
        <pre><code>
        // Create a new React project
        npx create-react-app my-app
        
        // Install Tailwind CSS
        cd my-app
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        </code></pre>
        
        <p>Next, you'll need to configure Tailwind CSS to work with your React project. Add the following to your tailwind.config.js file:</p>
        
        <pre><code>
        module.exports = {
          content: [
            "./src/**/*.{js,jsx,ts,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        </code></pre>
        
        <h2>Building Responsive Components</h2>
        
        <p>With React and Tailwind set up, you can now start building responsive components. Here's an example of a responsive card component:</p>
        
        <pre><code>
        function Card({ title, description, image }) {
          return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
          );
        }
        </code></pre>
        
        <p>This card component will look good on all screen sizes, but you can make it even more responsive by using Tailwind's responsive modifiers:</p>
        
        <pre><code>
        function ResponsiveCard({ title, description, image }) {
          return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <img 
                  src={image || "/placeholder.svg"} 
                  alt={title} 
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover" 
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{title}</h2>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            </div>
          );
        }
        </code></pre>
        
        <p>Now, on small screens, the image will be above the content, and on medium screens and above, the image will be to the left of the content.</p>
        
        <h2>Conclusion</h2>
        
        <p>React and Tailwind CSS provide a powerful combination for building responsive UIs. With React's component-based architecture and Tailwind's utility-first approach to styling, you can build beautiful, responsive UIs with ease.</p>
      `,
    },
    {
      title: "The Power of TypeScript in Modern Web Development",
      excerpt:
        "Discover how TypeScript can improve your development workflow and help catch errors early.",
      image: "/placeholder.svg",
      date: "April 28, 2024",
      readTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      slug: "power-of-typescript",
      content: `
        <p>TypeScript has become an essential tool in modern web development. It extends JavaScript by adding types, which can help catch errors early and improve the development experience.</p>
        
        <h2>Why TypeScript?</h2>
        
        <p>JavaScript is a dynamically typed language, which means that types are checked at runtime. This can lead to unexpected errors that are only discovered when the code is executed.</p>
        
        <p>TypeScript, on the other hand, is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language, which can help catch errors at compile time rather than runtime.</p>
        
        <h2>Getting Started with TypeScript</h2>
        
        <p>To get started with TypeScript, you'll need to install it and set up a new project. Here's how:</p>
        
        <pre><code>
        // Install TypeScript
        npm install -g typescript
        
        // Create a new TypeScript project
        mkdir my-ts-project
        cd my-ts-project
        tsc --init
        </code></pre>
        
        <p>This will create a new TypeScript project with a tsconfig.json file, which contains the compiler options for your project.</p>
        
        <h2>Basic Types in TypeScript</h2>
        
        <p>TypeScript supports several basic types, including:</p>
        
        <pre><code>
        // Boolean
        let isDone: boolean = false;
        
        // Number
        let decimal: number = 6;
        
        // String
        let color: string = "blue";
        
        // Array
        let list: number[] = [1, 2, 3];
        let list2: Array<number> = [1, 2, 3];
        
        // Tuple
        let x: [string, number] = ["hello", 10];
        
        // Enum
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green;
        
        // Any
        let notSure: any = 4;
        
        // Void
        function warnUser(): void {
          console.log("This is a warning message");
        }
        
        // Null and Undefined
        let u: undefined = undefined;
        let n: null = null;
        
        // Never
        function error(message: string): never {
          throw new Error(message);
        }
        </code></pre>
        
        <h2>Interfaces in TypeScript</h2>
        
        <p>Interfaces are a powerful way to define contracts within your code as well as contracts with code outside of your project. Here's an example:</p>
        
        <pre><code>
        interface User {
          name: string;
          id: number;
        }
        
        const user: User = {
          name: "Hayes",
          id: 0,
        };
        </code></pre>
        
        <h2>Classes in TypeScript</h2>
        
        <p>TypeScript supports classes, which were introduced in ES6. Here's an example:</p>
        
        <pre><code>
        class Greeter {
          greeting: string;
        
          constructor(message: string) {
            this.greeting = message;
          }
        
          greet() {
            return "Hello, " + this.greeting;
          }
        }
        
        let greeter = new Greeter("world");
        </code></pre>
        
        <h2>Conclusion</h2>
        
        <p>TypeScript is a powerful tool for modern web development. It adds static typing to JavaScript, which can help catch errors early and improve the development experience. With its rich type system, interfaces, and classes, TypeScript provides a robust foundation for building complex web applications.</p>
      `,
    },
    {
      title: "Optimizing Next.js Applications for Performance",
      excerpt:
        "Explore techniques to optimize your Next.js applications for better performance and user experience.",
      image: "/placeholder.svg",
      date: "April 10, 2024",
      readTime: "8 min read",
      tags: ["Next.js", "Performance", "Optimization"],
      slug: "optimizing-nextjs-applications",
      content: "This is a placeholder for the full blog content...",
    },
    {
      title: "Creating Custom Hooks in React",
      excerpt:
        "Learn how to create and use custom hooks to share logic between components in React.",
      image: "/placeholder.svg",
      date: "March 22, 2024",
      readTime: "6 min read",
      tags: ["React", "Hooks", "JavaScript"],
      slug: "creating-custom-hooks",
      content: "This is a placeholder for the full blog content...",
    },
    {
      title: "Introduction to Server Components in Next.js",
      excerpt:
        "Explore the new Server Components feature in Next.js and how it can improve your application.",
      image: "/placeholder.svg",
      date: "March 5, 2024",
      readTime: "9 min read",
      tags: ["Next.js", "React", "Server Components"],
      slug: "server-components-nextjs",
      content: "This is a placeholder for the full blog content...",
    },
    {
      title: "Building a Full-Stack Application with Next.js and MongoDB",
      excerpt:
        "A step-by-step guide to building a full-stack application using Next.js and MongoDB.",
      image: "/placeholder.svg",
      date: "February 18, 2024",
      readTime: "12 min read",
      tags: ["Next.js", "MongoDB", "Full-Stack"],
      slug: "fullstack-nextjs-mongodb",
      content: "This is a placeholder for the full blog content...",
    },
  ];

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
    <div className="pt-20">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-space text-sm">Back to Blog</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
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

              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jetbrains">
                <GlitchText text={post.title} />
              </h1>

              <div className="flex items-center text-sm text-gray-400 mb-8">
                <span className="flex items-center mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-between mb-8">
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-green-400 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-green-400 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="prose prose-invert prose-green max-w-none font-space">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
