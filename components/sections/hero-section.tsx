"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePortfolio } from "@/components/providers";
import GlitchText from "@/components/shared/glitch-text";
import Terminal from "@/components/shared/terminal";
import ScrambleText from "@/components/shared/scramble-text";
import { ArrowRight, Code, GitBranch, GitCommit } from "lucide-react";

export default function HeroSection() {
  const { setCursorType } = usePortfolio();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCanvasActive, setIsCanvasActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isCanvasActive) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reduce particle count for better performance
    const particleCount = Math.floor(window.innerWidth / 20); // Reduced from 10 to 20
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
          speedY: (Math.random() - 0.5) * 0.3, // Reduced speed
        });
      }
    };

    let animationFrameId: number;
    let lastFrameTime = 0;
    const frameDelay = 30; // Limit to ~30fps for better performance

    const updateParticles = (timestamp: number) => {
      // Only update if enough time has passed
      if (timestamp - lastFrameTime < frameDelay) {
        animationFrameId = requestAnimationFrame(updateParticles);
        return;
      }

      lastFrameTime = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(129, 230, 151, 0.5)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles - but limit connections for performance
        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 230, 151, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animationFrameId = requestAnimationFrame(updateParticles);

    window.addEventListener("resize", handleResize);

    // Disable canvas animation when not in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCanvasActive(true);
        } else {
          setIsCanvasActive(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isCanvasActive]);

  const terminalCommands = [
    "cd portfolio",
    "npm install",
    "npm run dev",
    "Starting development server...",
    "Ready in 1.2s",
    "Welcome to my portfolio!",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-block">
              <span className="font-space text-green-400">
                <span className="text-gray-500">// Hello World</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <GlitchText text="Sarthak" className="block mb-2" />
              <span className="text-green-400">Software Developer</span>
            </h1>

            <p className="text-gray-300 mb-8 max-w-lg font-space">
              <span className="json-bracket">{"{"}</span>
              <br />
              <span className="ml-4">
                <span className="json-key">"skills"</span>:
                <span className="json-value">
                  "Amazon Web Services, TypeScript, Python, React, Node.js"
                </span>
                ,
              </span>
              <br />
              <span className="ml-4">
                <span className="json-key">"passion"</span>:
                <span className="json-value">
                  "Building exceptional web experiences"
                </span>
              </span>
              <br />
              <span className="json-bracket">{"}"}</span>
            </p>

            {/* Currently Working On Section */}
            <div className="bg-[#1A1A1A] p-4 border border-[#333] mb-8 relative">
              <div className="absolute -top-2 left-4 bg-[#121212] px-2 z-10">
                <span className="text-[10px] text-gray-500 font-space">
                  Current Work
                </span>
              </div>
              <h3 className="font-jetbrains text-green-400 text-sm mb-3 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Currently Working On
              </h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <GitBranch className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-space">
                      <span className="text-xs text-purple-400 font-space mr-1">
                        current_project.name:
                      </span>
                      Nextresume.app
                    </p>
                    <p className="text-xs text-gray-400">
                      Using SST, React, AWS and Microservices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GitCommit className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-space">
                      <span className="text-xs text-purple-400 font-space mr-1">
                        latest_commit:
                      </span>
                      Changing the way people apply to jobs
                    </p>
                    <p className="text-xs text-gray-400">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-transparent border border-green-400 text-green-400 px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-400/10 transition-colors"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                <ScrambleText text="View Projects" />
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-500 transition-colors"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                <ScrambleText text="About Me" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Terminal
              commands={terminalCommands}
              typingSpeed={70}
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
