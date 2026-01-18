"use client";

import { motion } from "motion/react";
import { MapPin, Zap, Circle, Star } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const AboutHero = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const words = [
    { first: "Performance", second: "Solutions." },
    { first: "Digital", second: "Experiences." },
    { first: "Functional", second: "Interfaces." },
    { first: "Seamless", second: "Products." },
  ];

  const tags = [
    {
      label: "CURIOUS",
      color: "text-cyan-500 dark:text-cyan-400",
      border: "border-cyan-100 dark:border-cyan-900",
      bg: "bg-cyan-50 dark:bg-cyan-950",
    },
    {
      label: "FOCUSED",
      color: "text-blue-500 dark:text-blue-400",
      border: "border-blue-100 dark:border-blue-900",
      bg: "bg-blue-50 dark:bg-blue-950",
    },
    {
      label: "OBSESSED",
      color: "text-purple-500 dark:text-purple-400",
      border: "border-purple-100 dark:border-purple-900",
      bg: "bg-purple-50 dark:bg-purple-950",
    },
    {
      label: "BUILDER",
      color: "text-emerald-500 dark:text-emerald-400",
      border: "border-emerald-100 dark:border-emerald-900",
      bg: "bg-emerald-50 dark:bg-emerald-950",
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-6 overflow-hidden flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl w-full mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Left Column: Content */}
          <div className="flex-1 space-y-8">
            {/* Open to Work Badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-700 shadow-sm backdrop-blur-sm"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                Open to work
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-instrument font-bold text-zinc-900 dark:text-white tracking-tight leading-[0.9]">
                From <br />
                curious kid
              </h1>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-instrument-serif italic text-zinc-400 dark:text-zinc-500">
                  to
                </span>
                <span className="text-4xl md:text-5xl font-instrument-serif italic text-zinc-900 dark:text-white underline decoration-zinc-200 dark:decoration-zinc-700 decoration-4 underline-offset-8">
                  shaping
                </span>
              </div>
              <div className="relative h-16 md:h-20 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="absolute inset-0 flex flex-wrap items-center"
                  >
                    <span
                      className={`text-3xl md:text-4xl font-serif italic pr-3 ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {words[index].first}
                    </span>
                    <span
                      className={`text-3xl md:text-4xl font-serif italic ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {words[index].second}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bio */}
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md font-instrument font-light">
              I'm{" "}
              <span className="font-bold text-zinc-900 dark:text-white">
                Harsh
              </span>
              , Passionate about creating{" "}
              <span className="font-bold text-zinc-900 dark:text-white">
                intuitive and engaging
              </span>{" "}
              user experiences. Specialize in transforming ideas into
              beautifully crafted products.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-4 py-1.5 rounded-full border ${tag.border} ${tag.bg} ${tag.color} text-[10px] font-bold tracking-wider`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-72 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl p-8 space-y-8 relative overflow-hidden"
          >
            <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              <span>Identity</span>
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Base */}
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950 border border-pink-100 dark:border-pink-900 text-pink-500 dark:text-pink-400">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                    Base
                  </span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    Uttarakhand, India
                  </span>
                </div>
              </div>

              {/* Crafting Since */}
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950 border border-orange-100 dark:border-orange-900 text-orange-500 dark:text-orange-400">
                  <Zap size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                    Crafting Since
                  </span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    2023
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900 text-emerald-500 dark:text-emerald-400">
                  <Circle size={18} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                    Availability
                  </span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    Global / Freelance
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-tight text-zinc-400 dark:text-zinc-500 uppercase">
                Verified
              </span>
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
