"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePortfolio } from "@/components/providers";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function SocialFloat() {
  const { setCursorType } = usePortfolio();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show social float after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/sgandhi15", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sarthakgandhi1",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/sarthak_xp", label: "X" },
    { icon: Mail, href: "mailto:gandhi.sarthak15@gmail.com", label: "Email" },
  ];

  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex items-center transition-all duration-300 ${
          isCollapsed ? "-translate-x-[60px]" : "translate-x-0"
        }`}
      >
        <div className="bg-[#1A1A1A] border-r border-t border-b border-[#333] py-4 px-3 flex flex-col space-y-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </div>

        <button
          className="bg-[#1A1A1A] border-t border-r border-b border-[#333] p-2 text-gray-400 hover:text-green-400 transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
          onMouseEnter={() => setCursorType("hover")}
          onMouseLeave={() => setCursorType("default")}
          aria-label={
            isCollapsed ? "Expand social links" : "Collapse social links"
          }
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
