"use client";

import React, { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 flex justify-center transition-all duration-300 pointer-events-none ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div
        className={`flex items-center gap-4 transition-all duration-300 border px-6 py-2 rounded-full pointer-events-auto backdrop-blur-md shadow-sm ${
          scrolled
            ? isDarkMode
              ? "bg-zinc-900/80 border-white/10 shadow-xl shadow-black/20"
              : "bg-white/80 border-zinc-200 shadow-xl shadow-black/5"
            : isDarkMode
            ? "bg-white/5 border-white/10"
            : "bg-black/5 border-black/10"
        }`}
      >
        <div className="flex items-center gap-6 md:gap-8 mr-4">
          {[{nav:"Home", href:"/"}, {nav:"About", href:"/about"}, {nav:"Projects", href:"/projects"}].map((item) => (
            <Link
              key={item.nav}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-800 hover:text-black"
              }`}
            >
              {item.nav}
            </Link>
          ))}
        </div>

        <ToggleTheme isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
