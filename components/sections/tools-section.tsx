"use client"

import { useRef, useEffect } from "react"
import { usePortfolio } from "@/components/providers"
import GlitchText from "@/components/shared/glitch-text"
import { Code2, Database, Server, Figma, GitGraphIcon as Git, Chrome, Cpu, Globe, Terminal } from "lucide-react"

export default function ToolsSection() {
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

  const tools = [
    { name: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"] },
    { name: "Database", icon: Database, items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"] },
    { name: "Design", icon: Figma, items: ["Figma", "Adobe XD", "Photoshop", "Responsive Design", "UI/UX"] },
    { name: "DevOps", icon: Git, items: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel"] },
    { name: "Testing", icon: Chrome, items: ["Jest", "React Testing Library", "Cypress", "Postman", "Insomnia"] },
    {
      name: "Performance",
      icon: Cpu,
      items: ["Lighthouse", "Web Vitals", "Webpack", "Code Splitting", "Lazy Loading"],
    },
    { name: "Other", icon: Globe, items: ["SEO", "Accessibility", "i18n", "PWAs", "WebSockets"] },
  ]

  return (
    <section ref={sectionRef} id="tools" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="font-space text-green-400 mb-2 inline-block">
            <span className="text-gray-500">// My Toolkit</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <GlitchText text="Technologies & Tools" />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 skill-item animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-5 h-5 text-green-400 mr-2" />
                  <h3 className="text-lg font-bold font-jetbrains">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="text-green-400 mr-2">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-[#1E1E1E] p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-1000">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 text-green-400 mr-2" />
            <h3 className="text-lg font-bold font-jetbrains">Command Line Proficiency</h3>
          </div>
          <div className="font-space text-sm text-gray-300 overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              <code>
                <span className="text-green-400">$</span> npm install dependencies
                <br />
                <span className="text-green-400">$</span> git commit -m "feat: add new portfolio section"
                <br />
                <span className="text-green-400">$</span> docker-compose up -d
                <br />
                <span className="text-green-400">$</span> vercel deploy --prod
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
