"use client";

import { useEffect, useState } from "react";
import { usePortfolio } from "@/components/providers";
import GlitchText from "@/components/shared/glitch-text";

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = usePortfolio();
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Initializing system...");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [infrastructureLog, setInfrastructureLog] = useState(
    "Connecting to infrastructure..."
  );

  useEffect(() => {
    // Check if loading has been shown before
    const hasLoadingBeenShown = localStorage.getItem("loadingShown");

    if (hasLoadingBeenShown === "true" && !isLoading) {
      // Skip loading animation if already shown and isLoading is false
      setHasLoaded(true);
      return;
    }

    if (isLoading) {
      // Use a more predictable progress increment
      const totalDuration = 5000; // 5 seconds total
      const incrementInterval = 50; // Update every 50ms
      const incrementAmount = (100 * incrementInterval) / totalDuration; // Calculate increment to reach 100% in totalDuration

      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + incrementAmount;
          if (newProgress >= 100) {
            clearInterval(interval);

            // Add a small delay before hiding the loading screen
            setTimeout(() => {
              setIsLoading(false);
              localStorage.setItem("loadingShown", "true");
              setHasLoaded(true);
            }, 500);

            return 100;
          }
          return newProgress;
        });
      }, incrementInterval);

      const textInterval = setInterval(() => {
        setText((prev) => {
          const texts = [
            "Initializing system...",
            "Loading modules...",
            "Compiling components...",
            "Fetching data from API...",
            "Rendering UI components...",
            "Optimizing assets...",
            "Establishing database connection...",
            "Launching application...",
          ];
          const currentIndex = texts.indexOf(prev);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
      }, 600);

      const infraInterval = setInterval(() => {
        setInfrastructureLog((prev) => {
          const logs = [
            "Connecting to infrastructure...",
            "AWS EC2 instances initialized",
            "PostgreSQL database connected",
            "Redis cache warmed up",
            "CDN configuration loaded",
            "Docker containers running",
            "Kubernetes pods ready",
            "Nginx server configured",
            "SSL certificates validated",
            "Environment variables loaded",
          ];
          const currentIndex = logs.indexOf(prev);
          const nextIndex = (currentIndex + 1) % logs.length;
          return logs[nextIndex];
        });
      }, 800);

      return () => {
        clearInterval(interval);
        clearInterval(textInterval);
        clearInterval(infraInterval);
      };
    }
  }, [isLoading, setIsLoading]);

  if (hasLoaded && !isLoading) {
    return null;
  }

  return (
    <div className={`loading-screen ${!isLoading ? "loaded" : ""}`}>
      <div className="w-full max-w-md px-4">
        <GlitchText
          text="INITIALIZING PORTFOLIO"
          className="text-3xl font-jetbrains mb-8 text-center"
        />
        <div className="h-2 w-full bg-[#2A2A2A] mb-4">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm font-space mb-6">
          <span className="text-green-400">{text}</span>
          <span>{Math.min(Math.floor(progress), 100)}%</span>
        </div>

        <div className="bg-[#1A1A1A] p-4 mb-6 border border-[#333] font-space">
          <div className="text-green-400 text-sm mb-2">
            // Infrastructure Status
          </div>
          <div className="text-gray-400 text-sm">{infrastructureLog}</div>
        </div>

        <div className="mt-8 font-space text-sm text-gray-400">
          <div className="terminal-prompt">npm install dependencies</div>
          <div className="terminal-prompt">configuring environment</div>
          <div className="terminal-prompt">initializing react components</div>
          <div className="terminal-prompt">
            loading portfolio data<span className="terminal-cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
