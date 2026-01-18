import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolioData";


import CurvedLoop from "./CurvedLoop";


const FeaturedSection = () => {

  
  const Projects = projects.slice(0, 4);

  // theme

  const { theme } = useTheme();
  const isDarkMode = theme === "dark";


  return (
    <section className="max-w-3xl mx-auto px-6 -mb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={`${
          isDarkMode ? "border-white/5" : "border-black/5"
        } pt-12 border-b border-zinc-200 dark:border-zinc-200 `}
      >
        <p
          className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-2 ${
            isDarkMode ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          Curated Selection
        </p>
        <div className="flex items-baseline gap-4">
          <h3
            className={`text-4xl md:text-4xl font-serif italic ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            Featured
          </h3>
          <h3
            className={`text-4xl md:text-4xl font-light ${
              isDarkMode ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24 mb-12 mt-12">
          {Projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>

      {/* View All Work Link */}
      <div className="flex justify-center mt-12">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/projects"
            className="group flex items-center gap-3 px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-black rounded-full font-inter font-medium text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/20"
          >
            View All Work
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* Curved Loop Text */}
      <div className="relative w-full h-30 flex justify-center items-center">
        <CurvedLoop
          marqueeText="✦ More Projects Cooking "
          speed={4}
          curveAmount={100}
          direction="left"
          interactive={true}
          fillColor={isDarkMode ? "#9f9fa9" : "#9f9fa9"}
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
