import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  Code,
  Server,
  Database,
  Layers,
} from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";

interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deployment?: string[];
  storage?: string[];
  content?: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  slug: string;
  date: string;
  duration: string;
  role: string;
  client: string;
  detailedDescription: string;
  features: string[];
  challenges: string;
  techStack: TechStack;
  screenshots: Array<{ url: string; caption: string }>;
}

// This would typically come from a database or API
const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
    slug: "e-commerce-platform",
    date: "June 2023",
    duration: "3 months",
    role: "Full Stack Developer",
    client: "RetailTech Inc.",
    detailedDescription: `
      This e-commerce platform provides a complete solution for online retailers. It includes product management, 
      inventory tracking, shopping cart functionality, secure checkout with Stripe integration, and a comprehensive 
      admin dashboard.
      
      The platform is built with a React frontend and Node.js backend, with MongoDB as the database. It uses Redux 
      for state management and features responsive design for optimal viewing on all devices.
    `,
    features: [
      "User authentication and profile management",
      "Product catalog with categories and search functionality",
      "Shopping cart and wishlist",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for product and order management",
      "Inventory tracking and notifications",
      "Analytics and reporting",
    ],
    challenges: `
      One of the main challenges was implementing real-time inventory updates across multiple concurrent sessions. 
      This was solved by using WebSockets to push updates to all connected clients whenever inventory changes occurred.
      
      Another challenge was optimizing the checkout process to minimize cart abandonment. We conducted extensive user 
      testing and implemented a streamlined, single-page checkout flow that increased conversion rates by 15%.
    `,
    techStack: {
      frontend: ["React", "Redux", "TailwindCSS", "Framer Motion"],
      backend: ["Node.js", "Express", "JWT Authentication"],
      database: ["MongoDB", "Mongoose", "Redis for caching"],
      deployment: ["AWS", "Docker", "CI/CD with GitHub Actions"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Product Listing Page" },
      { url: "/placeholder.svg", caption: "Product Detail View" },
      { url: "/placeholder.svg", caption: "Shopping Cart" },
      { url: "/placeholder.svg", caption: "Admin Dashboard" },
    ],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "#",
    demo: "#",
    slug: "task-management-app",
    date: "March 2023",
    duration: "2 months",
    role: "Lead Developer",
    client: "ProductivityPro",
    detailedDescription: `
      This task management application helps teams organize their work with a focus on collaboration and real-time updates. 
      Users can create workspaces, projects, and tasks, assign them to team members, set deadlines, and track progress.
      
      The app features real-time updates using Socket.io, so all team members see changes instantly without needing to refresh. 
      It also includes commenting on tasks, file attachments, and integration with popular calendar apps.
    `,
    features: [
      "Team workspaces and project management",
      "Task creation, assignment, and tracking",
      "Real-time updates and notifications",
      "Comments and discussions on tasks",
      "File attachments and sharing",
      "Calendar integration and deadline reminders",
      "Progress tracking and reporting",
      "Mobile-responsive design",
    ],
    challenges: `
      The biggest challenge was implementing the real-time collaboration features while maintaining performance. 
      We optimized our Socket.io implementation to only send necessary updates and used a combination of optimistic 
      UI updates and server validation to ensure a smooth user experience.
      
      We also faced challenges with data synchronization across devices, which we solved by implementing a robust 
      conflict resolution system that intelligently merges changes when conflicts occur.
    `,
    techStack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "React Query"],
      backend: ["Next.js API Routes", "Prisma ORM", "Socket.io"],
      database: ["PostgreSQL", "Redis for real-time features"],
      deployment: ["Vercel", "GitHub Actions for CI/CD"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Dashboard View" },
      { url: "/placeholder.svg", caption: "Task Board" },
      { url: "/placeholder.svg", caption: "Task Detail with Comments" },
      { url: "/placeholder.svg", caption: "Calendar Integration" },
    ],
  },
  {
    title: "Finance Dashboard",
    description:
      "An interactive dashboard for tracking financial data with charts, filters, and data visualization.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    github: "#",
    demo: "#",
    slug: "finance-dashboard",
    date: "January 2023",
    duration: "2.5 months",
    role: "Frontend Developer",
    client: "FinTech Solutions",
    detailedDescription: `
      This finance dashboard provides users with a comprehensive view of their financial data through interactive 
      charts, graphs, and tables. It allows for tracking expenses, income, investments, and financial goals.
      
      The dashboard features advanced filtering options, date range selection, and customizable views. Users can 
      drill down into specific categories, compare time periods, and export reports in various formats.
    `,
    features: [
      "Interactive charts and graphs using D3.js",
      "Expense and income tracking",
      "Investment portfolio monitoring",
      "Budget planning and goal setting",
      "Financial forecasting",
      "Data export in CSV, PDF, and Excel formats",
      "Custom date range selection",
      "Category-based filtering and analysis",
    ],
    challenges: `
      Creating performant data visualizations with large datasets was a significant challenge. We implemented 
      data aggregation and caching strategies to ensure smooth rendering of charts even with thousands of data points.
      
      Another challenge was designing an intuitive interface that could present complex financial data in an 
      accessible way. We conducted multiple rounds of user testing to refine the UI and ensure that users could 
      easily understand their financial situation at a glance.
    `,
    techStack: {
      frontend: ["React", "D3.js", "Recharts", "TailwindCSS"],
      backend: ["Express", "Node.js", "JWT Authentication"],
      database: ["PostgreSQL", "Sequelize ORM"],
      deployment: ["AWS", "Docker", "Terraform"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Main Dashboard" },
      { url: "/placeholder.svg", caption: "Expense Analysis" },
      { url: "/placeholder.svg", caption: "Investment Portfolio" },
      { url: "/placeholder.svg", caption: "Budget Planning" },
    ],
  },
  {
    title: "AI Content Generator",
    description:
      "A tool that uses AI to generate blog posts, social media content, and marketing copy.",
    image: "/placeholder.svg",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel AI SDK"],
    github: "#",
    demo: "#",
    slug: "ai-content-generator",
    date: "April 2023",
    duration: "1.5 months",
    role: "Full Stack Developer",
    client: "ContentAI",
    detailedDescription: `
      This AI-powered content generator helps marketers, bloggers, and social media managers create high-quality 
      content quickly. It leverages OpenAI's GPT models to generate blog posts, social media updates, email newsletters, 
      and marketing copy based on user prompts and preferences.
      
      The tool includes templates for different content types, tone adjustment options, and the ability to save and 
      edit generated content. It also features a content calendar for scheduling and publishing.
    `,
    features: [
      "AI-generated blog posts and articles",
      "Social media content creation",
      "Email newsletter generation",
      "Marketing copy for websites and ads",
      "Content templates and customization",
      "Tone and style adjustment",
      "Content calendar and scheduling",
      "Export to WordPress, Medium, and other platforms",
    ],
    challenges: `
      The main challenge was optimizing the interaction with the OpenAI API to provide fast responses while managing 
      costs. We implemented a caching system for similar prompts and developed a queue system for handling high volumes 
      of requests during peak times.
      
      Another challenge was ensuring the quality and relevance of generated content. We built a feedback system that 
      allowed users to rate and refine outputs, which helped improve the prompts and instructions sent to the AI model.
    `,
    techStack: {
      frontend: ["Next.js", "TailwindCSS", "React Hook Form"],
      backend: ["Next.js API Routes", "OpenAI API", "Vercel AI SDK"],
      database: ["Supabase", "PostgreSQL"],
      deployment: ["Vercel", "GitHub Actions"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Content Generation Interface" },
      { url: "/placeholder.svg", caption: "Template Selection" },
      { url: "/placeholder.svg", caption: "Content Calendar" },
      { url: "/placeholder.svg", caption: "Export Options" },
    ],
  },
  {
    title: "Real-time Chat Application",
    description:
      "A real-time messaging platform with channels, direct messages, and file sharing capabilities.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "WebSockets", "Redux"],
    github: "#",
    demo: "#",
    slug: "real-time-chat-application",
    date: "February 2023",
    duration: "2 months",
    role: "Frontend Developer",
    client: "ConnectNow",
    detailedDescription: `
      This real-time chat application provides a seamless communication platform for teams and communities. It features 
      public channels, private groups, and direct messaging, all with instant message delivery and typing indicators.
      
      The app supports rich media sharing, including images, videos, and documents. It also includes features like 
      message reactions, threaded replies, and search functionality to enhance the user experience.
    `,
    features: [
      "Real-time messaging with WebSockets",
      "Public channels and private groups",
      "Direct messaging between users",
      "File and media sharing",
      "Message reactions and emoji support",
      "Threaded conversations and replies",
      "Message search and filtering",
      "User presence indicators and typing notifications",
    ],
    challenges: `
      Ensuring message delivery and synchronization across multiple devices was a significant challenge. We implemented 
      a robust WebSocket architecture with fallback mechanisms to ensure messages were always delivered, even in 
      unreliable network conditions.
      
      Another challenge was optimizing the application for large chat histories. We implemented virtual scrolling and 
      lazy loading of messages to ensure smooth performance even in channels with thousands of messages.
    `,
    techStack: {
      frontend: ["React", "Redux", "Styled Components"],
      backend: [
        "Firebase Realtime Database",
        "Firebase Authentication",
        "Cloud Functions",
      ],
      storage: ["Firebase Storage for file uploads"],
      deployment: ["Firebase Hosting", "GitHub Actions"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Main Chat Interface" },
      { url: "/placeholder.svg", caption: "Direct Messaging" },
      { url: "/placeholder.svg", caption: "File Sharing" },
      { url: "/placeholder.svg", caption: "Threaded Conversations" },
    ],
  },
  {
    title: "Portfolio Website Template",
    description:
      "A customizable portfolio template for developers to showcase their work and skills.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    github: "#",
    demo: "#",
    slug: "portfolio-website-template",
    date: "May 2023",
    duration: "1 month",
    role: "Frontend Developer",
    client: "DevShowcase",
    detailedDescription: `
      This portfolio website template provides developers with a professional, customizable platform to showcase their 
      projects, skills, and experience. It features a modern design with smooth animations, responsive layouts, and 
      optimized performance.
      
      The template includes sections for projects, skills, experience, and contact information, all of which can be 
      easily customized through a simple configuration file. It also supports dark and light modes, and includes 
      built-in SEO optimization.
    `,
    features: [
      "Customizable project showcase",
      "Skills and technology section",
      "Work experience timeline",
      "Contact form with validation",
      "Blog section with MDX support",
      "Dark and light mode toggle",
      "Smooth page transitions and animations",
      "Responsive design for all devices",
    ],
    challenges: `
      Creating a template that was both visually impressive and easy to customize was the main challenge. We developed 
      a configuration-based approach that allows users to update their portfolio content without needing to modify the 
      code directly.
      
      Optimizing performance while maintaining smooth animations was another challenge. We used Framer Motion for 
      animations and implemented code splitting and lazy loading to ensure fast page loads even with rich content.
    `,
    techStack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      content: ["MDX for blog posts", "Next.js API routes for contact form"],
      deployment: ["Vercel", "Netlify", "GitHub Pages options"],
    },
    screenshots: [
      { url: "/placeholder.svg", caption: "Home Page" },
      { url: "/placeholder.svg", caption: "Projects Section" },
      { url: "/placeholder.svg", caption: "Skills Showcase" },
      { url: "/placeholder.svg", caption: "Contact Form" },
    ],
  },
];

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectParams {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/projects"
              className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
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
              href="/projects"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-space text-sm">Back to Projects</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jetbrains">
                <GlitchText text={project.title} />
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {project.duration}
                </span>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="absolute top-0 left-0 bg-[#121212] px-2 py-1 z-10 -mt-2 ml-2">
                <span className="text-[10px] text-gray-500 font-space">
                  <span className="code-comment">// project.image</span>
                </span>
              </div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>

            <div className="flex justify-between mb-8">
              <div className="flex space-x-4">
                <Link
                  href={project.github}
                  className="bg-[#1A1A1A] p-2 text-green-400 hover:bg-green-400 hover:text-[#1A1A1A] transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={project.demo}
                  className="bg-[#1A1A1A] p-2 text-green-400 hover:bg-green-400 hover:text-[#1A1A1A] transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    Project Info
                  </span>
                </div>
                <h3 className="font-jetbrains text-green-400 mb-4">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.client:
                      </span>
                      Client
                    </span>
                    <span className="col-span-2">{project.client}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.role:
                      </span>
                      My Role
                    </span>
                    <span className="col-span-2">{project.role}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.date:
                      </span>
                      Date
                    </span>
                    <span className="col-span-2">{project.date}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-400">
                      <span className="text-xs text-gray-500 font-space block mb-1">
                        project.duration:
                      </span>
                      Duration
                    </span>
                    <span className="col-span-2">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    Tech Stack
                  </span>
                </div>
                <h3 className="font-jetbrains text-green-400 mb-4">
                  Technologies Used
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Code className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-bold">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Server className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-bold">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  {project.techStack.database && (
                    <div>
                      <div className="flex items-center mb-2">
                        <Database className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm font-bold">Database</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.database.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center mb-2">
                      <Layers className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-bold">Deployment</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.deployment?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">
                  // project.detailedDescription
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Project Overview
              </h2>
              <div className="prose prose-invert prose-green max-w-none font-space">
                {project.detailedDescription
                  .split("\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">// project.features</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Key Features
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300">
                    <span className="text-green-400">›</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">// project.challenges</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Challenges & Solutions
              </h2>
              <div className="prose prose-invert prose-green max-w-none font-space">
                {project.challenges
                  .split("\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-500 font-space mb-2">
                <span className="code-comment">// project.screenshots</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 font-jetbrains">
                Project Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot: any, index: number) => (
                  <div key={index} className="bg-[#1A1A1A] p-2 relative">
                    <Image
                      src={screenshot.url || "/placeholder.svg"}
                      alt={screenshot.caption}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-sm text-gray-400 mt-2">
                      {screenshot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="bg-transparent border border-green-400 text-green-400 px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-400/10 transition-colors mr-4"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
              <Link
                href={project.demo}
                className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
