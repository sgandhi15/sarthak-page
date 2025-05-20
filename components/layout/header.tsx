"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePortfolio } from "@/components/providers";
import ScrambleText from "@/components/shared/scramble-text";
import { Terminal, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { setCursorType } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onMouseEnter={() => setCursorType("hover")}
          onMouseLeave={() => setCursorType("default")}
        >
          <Terminal className="w-6 h-6 mr-2 text-green-400" />
          <ScrambleText text="SARTHAK._" className="font-jetbrains text-lg" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link font-space text-sm ${
                pathname === item.path ? "text-green-400" : "text-gray-300"
              }`}
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={() => setCursorType("default")}
            >
              <ScrambleText text={item.name} />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onMouseEnter={() => setCursorType("hover")}
          onMouseLeave={() => setCursorType("default")}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-green-400" />
          ) : (
            <Menu className="w-6 h-6 text-green-400" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-[#121212]/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link font-space text-sm ${
                  pathname === item.path ? "text-green-400" : "text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                <ScrambleText text={item.name} />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
