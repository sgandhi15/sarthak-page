"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GlitchText from "@/components/shared/glitch-text";
import AnimateOnScroll from "@/components/shared/animate-on-scroll";
import ToolsSection from "@/components/sections/tools-section";
import CertificatesSection from "@/components/sections/certificates-section";
import VolunteerSection from "@/components/sections/volunteer-section";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Detailed About Header */}
      <section className="py-20 bg-[#161616]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-space text-sm">Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <GlitchText text="About Sarthak" />
            </h1>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimateOnScroll delay={300}>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg"
                  alt="Sarthak Gandhi"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500}>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">{`<Section component="AboutText" />`}</span>
                  </div>
                  <h2 className="text-2xl font-bold font-jetbrains mb-4">
                    Who am I?
                  </h2>
                  <p className="text-gray-300">
                    I'm a passionate full-stack developer with a keen eye for
                    creating elegant solutions to complex problems. With
                    expertise in modern web technologies and a strong foundation
                    in software engineering principles, I strive to build
                    applications that are not only functional but also provide
                    an exceptional user experience.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">{`<Section component="Skills" />`}</span>
                  </div>
                  <h2 className="text-2xl font-bold font-jetbrains mb-4">
                    What I Do
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Develop responsive and performant web applications using
                        React, Next.js, and TypeScript
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Design and implement RESTful APIs and GraphQL services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Create beautiful and intuitive user interfaces with
                        modern CSS frameworks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Optimize applications for performance and accessibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#121212] px-2 z-10">
              <span className="text-[10px] text-gray-500 font-space">
                Career Timeline
              </span>
            </div>
            <span className="font-space text-green-400 mb-2 inline-block">
              <span className="text-gray-500">// Professional Journey</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <GlitchText text="Career Timeline" />
            </h2>
          </div>

          <div className="relative border-l-2 border-[#333] ml-4 md:ml-8 pl-8 space-y-12">
            {/* Job 1 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 bg-green-400 rounded-full border-4 border-[#121212]"></div>
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    2022 - Present
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">2022 - Present</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">
                  Senior Full Stack Developer
                </h3>
                <h4 className="text-md text-green-400 mb-4">
                  TechInnovate Solutions
                </h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[0].responsibilities[0]
                    </span>
                  </div>
                  <p>
                    Led the development of a cloud-based SaaS platform using
                    Next.js, TypeScript, and AWS.
                  </p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[0].responsibilities[1]
                    </span>
                  </div>
                  <p>
                    Implemented CI/CD pipelines and containerization strategies
                    to improve deployment efficiency.
                  </p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[0].responsibilities[2]
                    </span>
                  </div>
                  <p>
                    Mentored junior developers and conducted code reviews to
                    maintain code quality.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Next.js
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    TypeScript
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    AWS
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 bg-green-400 rounded-full border-4 border-[#121212]"></div>
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    2020 - 2022
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">2020 - 2022</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">
                  Full Stack Developer
                </h3>
                <h4 className="text-md text-green-400 mb-4">WebFusion Inc.</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>
                    Developed and maintained e-commerce platforms for multiple
                    clients using React and Node.js.
                  </p>
                  <p>
                    Optimized database queries and implemented caching
                    strategies to improve application performance.
                  </p>
                  <p>
                    Collaborated with UX designers to implement responsive,
                    accessible user interfaces.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    React
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Node.js
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    MongoDB
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Redis
                  </span>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 bg-green-400 rounded-full border-4 border-[#121212]"></div>
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">
                    2019 - 2020
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">2019 - 2020</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">
                  Frontend Developer
                </h3>
                <h4 className="text-md text-green-400 mb-4">StartupLaunch</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>
                    Built interactive user interfaces for a startup incubator
                    platform using React and Redux.
                  </p>
                  <p>
                    Implemented responsive designs and ensured cross-browser
                    compatibility.
                  </p>
                  <p>
                    Participated in agile development processes and sprint
                    planning.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    React
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Redux
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    SCSS
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Include other sections */}
      <ToolsSection />
      <CertificatesSection />
      <VolunteerSection />
    </div>
  );
}
