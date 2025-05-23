"use client";

import { useRef, useEffect } from "react";
import { usePortfolio } from "@/components/providers";
import GlitchText from "@/components/shared/glitch-text";
import { Award, Calendar, ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  const { setCursorType } = usePortfolio();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "03/2025",
      link: "https://www.credly.com/badges/90679eaa-a515-4c51-a4c4-7a75981e81ac/public_url",
    },
  ];

  return (
    <section ref={sectionRef} id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="font-space text-green-400 mb-2 inline-block">
            <span className="text-gray-500">// Credentials</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <GlitchText text="Certificates & Achievements" />
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 flex items-start"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={() => setCursorType("default")}
            >
              <div className="mr-4">
                <Award className="w-10 h-10 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold font-jetbrains mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
