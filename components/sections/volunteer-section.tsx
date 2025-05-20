"use client"

import { useRef, useEffect } from "react"
import { usePortfolio } from "@/components/providers"
import GlitchText from "@/components/shared/glitch-text"
import { Heart, Calendar, MapPin } from "lucide-react"

export default function VolunteerSection() {
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

  const volunteerWork = [
    {
      role: "Code Mentor",
      organization: "Local Coding Bootcamp",
      period: "2022 - Present",
      location: "Virtual",
      description: "Mentoring aspiring developers, reviewing code, and providing guidance on projects.",
    },
    {
      role: "Web Developer",
      organization: "Non-profit Organization",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed and maintained website for a local non-profit organization focused on education.",
    },
    {
      role: "Workshop Instructor",
      organization: "Tech Community",
      period: "2020 - 2021",
      location: "Various Locations",
      description: "Conducted workshops on web development fundamentals for beginners in the community.",
    },
  ]

  return (
    <section ref={sectionRef} id="volunteer" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="font-space text-green-400 mb-2 inline-block">
            <span className="text-gray-500">// Giving Back</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <GlitchText text="Volunteer Experience" />
          </h2>
        </div>

        <div className="space-y-6">
          {volunteerWork.map((work, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 flex items-start"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={() => setCursorType("default")}
            >
              <div className="mr-4">
                <Heart className="w-10 h-10 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold font-jetbrains mb-1">{work.role}</h3>
                <p className="text-gray-400 text-sm mb-2">{work.organization}</p>
                <div className="flex flex-wrap items-center gap-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {work.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {work.location}
                  </div>
                </div>
                <p className="text-sm text-gray-300">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
