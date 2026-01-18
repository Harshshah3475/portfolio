"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolioData";

const ProjectsHero = () => {
  return (
    <div className="mb-2 w-full">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors group mb-8"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[11px] font-mono tracking-[0.4em] text-zinc-400 dark:text-zinc-500 uppercase mb-8"
      >
        Portfolio Archive
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[0.8] flex flex-wrap items-end">
            <span className="font-instrument-serif italic font-normal text-zinc-900 dark:text-white mr-4">
              All
            </span>
            <span className="text-zinc-200 dark:text-zinc-800">Projects</span>
          </h1>
          <p className="text-base sm:text-[17px] text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed font-light">
            A curated collection of shipping web applications, experiments, and
            digital craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-start md:items-end group"
        >
          <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase mb-1 md:mb-2">
            Total Works
          </span>
          <span className="text-4xl md:text-6xl font-instrument-serif italic text-zinc-900  tabular-nums leading-none">
            {projects.length.toString().padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      <div className="h-[1px] w-full bg-linear-to-r from-zinc-200 via-zinc-100 to-transparent dark:from-zinc-800 dark:via-zinc-900 dark:to-transparent mt-10 md:mt-16" />
    </div>
  );
};

export default ProjectsHero;
