import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import GlitchText from "@/components/shared/glitch-text"
import ToolsSection from "@/components/sections/tools-section"
import CertificatesSection from "@/components/sections/certificates-section"
import VolunteerSection from "@/components/sections/volunteer-section"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Detailed About Header */}
      <section className="py-20 bg-[#161616]">
        <div className="container mx-auto px-4">
          <div className="mb-8">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative mb-6">
                <div className="absolute inset-0 border border-green-400 -m-3 z-0"></div>
                <div className="relative z-10 bg-[#1E1E1E] p-1">
                  <div className="absolute top-0 left-0 bg-[#1E1E1E] px-2 -mt-2 z-10">
                    <span className="text-[10px] text-gray-500 font-space">Profile Image</span>
                  </div>
                  <Image
                    src="/placeholder.svg"
                    alt="Sarthak - Developer Portrait"
                    width={600}
                    height={700}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 to-purple-500/20 mix-blend-overlay pointer-events-none"></div>
              </div>

              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#161616] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">Personal Info</span>
                </div>
                <h3 className="font-jetbrains text-green-400 mb-4">Personal Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">developers.name:</span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Name</span>
                      <span className="w-full sm:w-2/3">Sarthak</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">developers.location:</span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Location</span>
                      <span className="w-full sm:w-2/3">San Francisco, CA</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">developers.experience:</span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Experience</span>
                      <span className="w-full sm:w-2/3">5+ Years</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">developers.availability:</span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Availability</span>
                      <span className="w-full sm:w-2/3">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="text-[10px] text-gray-500 font-space mb-2">Developer Profile</div>
              </div>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-4 font-jetbrains">My Journey</h3>
                  <div className="text-xs text-gray-500 font-space mb-2">
                    <span className="code-comment">// developers.bio.journey</span>
                  </div>
                  <p className="mb-3">
                    I began my development journey over 5 years ago, starting with front-end technologies and gradually
                    expanding into full-stack development. What started as a curiosity quickly evolved into a passion
                    for creating digital experiences that solve real-world problems.
                  </p>
                  <p>
                    Throughout my career, I've worked with startups and established companies alike, helping them build
                    scalable web applications that deliver exceptional user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 font-jetbrains">My Approach</h3>
                  <div className="text-xs text-gray-500 font-space mb-2">
                    <span className="code-comment">// developers.bio.approach</span>
                  </div>
                  <p className="mb-3">
                    I believe in writing clean, maintainable code that stands the test of time. My development
                    philosophy centers around three core principles: performance, accessibility, and user experience.
                  </p>
                  <p>
                    I'm constantly learning and adapting to new technologies, but I'm careful to choose the right tools
                    for each project rather than chasing the latest trends.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 font-jetbrains">Beyond Coding</h3>
                  <div className="text-xs text-gray-500 font-space mb-2">
                    <span className="code-comment">// developers.bio.interests</span>
                  </div>
                  <p>
                    When I'm not coding, you'll find me exploring new hiking trails, experimenting with photography, or
                    contributing to open-source projects. I'm also passionate about mentoring aspiring developers and
                    sharing knowledge through my blog and community involvement.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#161616] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">Education</span>
                </div>
                <h3 className="font-jetbrains text-green-400 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">// education[0].degree</span>
                    </div>
                    <h4 className="font-bold">B.S. in Computer Science</h4>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">// education[0].institution</span>
                    </div>
                    <p className="text-sm text-gray-400">University of California, Berkeley</p>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">// education[0].years</span>
                    </div>
                    <p className="text-xs text-gray-500">2015 - 2019</p>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">// education[1].certification</span>
                    </div>
                    <h4 className="font-bold">AWS Certified Solutions Architect</h4>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">// education[1].issuer</span>
                    </div>
                    <p className="text-sm text-gray-400">Amazon Web Services</p>
                    <div className="text-xs text-gray-500 font-space mb-1">
                      <span className="code-comment">// education[1].year</span>
                    </div>
                    <p className="text-xs text-gray-500">2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#121212] px-2 z-10">
              <span className="text-[10px] text-gray-500 font-space">Career Timeline</span>
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
                  <span className="text-[10px] text-gray-500 font-space">2022 - Present</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">2022 - Present</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">Senior Full Stack Developer</h3>
                <h4 className="text-md text-green-400 mb-4">TechInnovate Solutions</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">// career[0].responsibilities[0]</span>
                  </div>
                  <p>Led the development of a cloud-based SaaS platform using Next.js, TypeScript, and AWS.</p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">// career[0].responsibilities[1]</span>
                  </div>
                  <p>Implemented CI/CD pipelines and containerization strategies to improve deployment efficiency.</p>
                  <div className="text-xs text-gray-500 font-space mb-1">
                    <span className="code-comment">// career[0].responsibilities[2]</span>
                  </div>
                  <p>Mentored junior developers and conducted code reviews to maintain code quality.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">Next.js</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">TypeScript</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">AWS</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 bg-green-400 rounded-full border-4 border-[#121212]"></div>
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">2020 - 2022</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">2020 - 2022</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">Full Stack Developer</h3>
                <h4 className="text-md text-green-400 mb-4">WebFusion Inc.</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>Developed and maintained e-commerce platforms for multiple clients using React and Node.js.</p>
                  <p>
                    Optimized database queries and implemented caching strategies to improve application performance.
                  </p>
                  <p>Collaborated with UX designers to implement responsive, accessible user interfaces.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">React</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">Node.js</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">MongoDB</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">Redis</span>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 bg-green-400 rounded-full border-4 border-[#121212]"></div>
              <div className="bg-[#1A1A1A] p-6 relative">
                <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                  <span className="text-[10px] text-gray-500 font-space">2019 - 2020</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">2019 - 2020</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jetbrains">Frontend Developer</h3>
                <h4 className="text-md text-green-400 mb-4">StartupLaunch</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>Built interactive user interfaces for a startup incubator platform using React and Redux.</p>
                  <p>Implemented responsive designs and ensured cross-browser compatibility.</p>
                  <p>Participated in agile development processes and sprint planning.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">React</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">Redux</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">SCSS</span>
                  <span className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space">JavaScript</span>
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
  )
}
