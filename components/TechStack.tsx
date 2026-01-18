import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import LogoLoop from "./LogoLoop";
import { techStack } from "../data/portfolioData";

const TechStack = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  
  return (
    <div className="max-w-3xl mx-auto px-6 py-2 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={`${
          isDarkMode ? "border-white/5" : "border-black/5"
        } pt-12 border-b pb-2`}
      >
        <p
          className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-2 ${
            isDarkMode ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          Premium tools
        </p>
        <div className="flex items-baseline gap-4">
          <h3
            className={`text-4xl md:text-4xl font-serif italic ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            Tech
          </h3>
          <h3
            className={`text-4xl md:text-4xl font-light ${
              isDarkMode ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            Stack
          </h3>
        </div>
        <div
          style={{ position: "relative", overflow: "hidden" }}
          className="mt-12 h-fit my-12"
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techStack.map((tech) => ({
              src: tech.icon,
              alt: tech.name,
              href: tech.url,
              invertInDark: tech.invertDark && isDarkMode,
            }))}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={isDarkMode ? "#0b0b0b" : "#ffffff"}
            ariaLabel="Technology partners"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
