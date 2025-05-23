"use client";

import Link from "next/link";
import { usePortfolio } from "@/components/providers";
import ScrambleText from "@/components/shared/scramble-text";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const { setCursorType } = usePortfolio();

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
    <footer className="bg-[#1A1A1A] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-jetbrains text-lg mb-2">
              <ScrambleText text="SARTHAK._" />
            </div>
            <p className="text-gray-400 text-sm font-space">
              <span className="text-gray-500">// Software Developer</span>
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#333333] text-center text-xs text-gray-500 font-space">
          <p>
            <span className="text-gray-500">
              /* Built with Next.js and TypeScript */
            </span>
          </p>
          {/* <p className="mt-2">
            &copy; {new Date().getFullYear()} Sarthak Gandhi. All rights
            reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
