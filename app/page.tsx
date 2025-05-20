import { Suspense } from "react"
import HeroSection from "@/components/sections/hero-section"
import ProjectsPreview from "@/components/sections/projects-preview"
import BlogPreview from "@/components/sections/blog-preview"
import LoadingSection from "@/components/shared/loading-section"

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />

      <Suspense fallback={<LoadingSection title="Projects" />}>
        <ProjectsPreview />
      </Suspense>

      <Suspense fallback={<LoadingSection title="Blog" />}>
        <BlogPreview />
      </Suspense>
    </div>
  )
}
