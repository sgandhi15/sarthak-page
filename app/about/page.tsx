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
                    I'm a Full Stack Developer with 2+ years of experience
                    building scalable web applications using TypeScript, React,
                    Node.js, and AWS. I specialize in delivering end-to-end
                    features, architecting serverless systems, and integrating
                    LLM APIs to enable AI-driven experiences. Currently pursuing
                    my Master's in Computer Engineering at Memorial University,
                    I combine academic knowledge with practical experience to
                    create innovative solutions.
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
                        Develop scalable web applications using TypeScript,
                        React, and Node.js
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Architect and implement serverless systems on AWS
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Integrate LLM APIs (OpenAI, Gemini) for AI-driven
                        experiences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">›</span>
                      <span className="text-gray-300">
                        Lead development teams and mentor junior developers
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
          <div className="mb-16 text-center">
            <span className="font-space text-green-400 mb-2 block">
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
                    02/2024 - 04/2024
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">
                    02/2024 - 04/2024
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">
                  Software Developer
                </h3>
                <h4 className="text-md text-green-400 mb-4">MainOnePro Inc.</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[0].responsibilities[0]
                    </span>
                  </div>
                  <p>
                    Directed the development of Kiderra, an award-winning SaaS
                    MVP, leading a team of 5 developers to deliver a functional
                    prototype within 3 months.
                  </p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[0].responsibilities[1]
                    </span>
                  </div>
                  <p>
                    Represented the company at Collision Conference 2024,
                    earning the Impact Startup Award and engaging with investors
                    and government representatives.
                  </p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[0].responsibilities[2]
                    </span>
                  </div>
                  <p>
                    Mentored 2 junior developers, fostering technical growth and
                    enhancing team productivity through agile methodologies.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    TypeScript
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    React
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Node.js
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    AWS
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
                    12/2020 - 08/2022
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">
                    12/2020 - 08/2022
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">
                  Software Developer - Lead
                </h3>
                <h4 className="text-md text-green-400 mb-4">
                  Creadigol Solution
                </h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[1].responsibilities[0]
                    </span>
                  </div>
                  <p>
                    Delivered client-facing Web3 applications supporting over
                    5,000 concurrent users, implementing secure JWT-based
                    authentication and session management.
                  </p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[1].responsibilities[1]
                    </span>
                  </div>
                  <p>
                    Built CI/CD pipelines using GitLab and deployed scalable
                    cloud infrastructure on AWS and DigitalOcean.
                  </p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">
                      // career[1].responsibilities[2]
                    </span>
                  </div>
                  <p>
                    Engineered algorithms for NFT collection rankings and
                    AI-driven gameplay, enabling informed investment decisions.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Web3
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    Node.js
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    AWS
                  </span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">
                    GitLab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-[#161616]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="font-space text-green-400 mb-2 block">
              <span className="text-gray-500">// Education</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <GlitchText text="Education" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] p-6">
              <h3 className="text-xl font-bold font-jetbrains mb-2">
                Master of Applied Science in Computer Engineering
              </h3>
              <p className="text-green-400 mb-2">Memorial University</p>
              <p className="text-gray-400 text-sm">09/2022 - 04/2024</p>
            </div>

            <div className="bg-[#1A1A1A] p-6">
              <h3 className="text-xl font-bold font-jetbrains mb-2">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-green-400 mb-2">
                Babaria Institute of Technology
              </p>
              <p className="text-gray-400 text-sm">08/2017 - 05/2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Include other sections */}
      <ToolsSection />
      <CertificatesSection />
      {/* <VolunteerSection /> */}
    </div>
  );
}
