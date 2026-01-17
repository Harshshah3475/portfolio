"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const words = [
    { first: "Performance", second: "Solutions." },
    { first: "Digital", second: "Experiences." },
    { first: "Functional", second: "Interfaces." },
    { first: "Seamless", second: "Products." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);



  return (
    <section className="max-w-2xl mx-auto px-6 ">
      {/* Banner Section */}
   
      {/* Content Section */}
      <div className="mt-20 md:mt-15 space-y-10">
        {/* Name & Title */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className={`text-4xl md:text-6xl font-serif italic tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
              >
                Harsh Kumar Shah
              </motion.h1>
            </div>
            {/* based in India*/}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-2"
            >
              <span className="flex items-center justify-center w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full text-white shadow-lg shadow-blue-500/30">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className={isDarkMode ? 'text-zinc-800' : 'text-zinc-300'}>
                ·
              </span>
              <span className={`text-sm md:text-sm border-b border-dotted pb-0.5 ${isDarkMode ? 'text-zinc-400 border-zinc-700' : 'text-zinc-600 border-zinc-300'}`}>
                Based in India
              </span>
            </motion.div>
          </div>
        </div>

        {/* Tagline */}
        <div className="space-y-1 text-xl md:text-3xl tracking-tight leading-none">
          <div className="flex flex-wrap items-baseline overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className={`font-serif italic pr-3 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
            >
              Building
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className={isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}
            >
              Polished
            </motion.span>
          </div>
          <div className="relative h-[1.1em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="flex flex-wrap items-baseline"
              >
                <span className={`font-serif italic pr-3 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {words[index].first}
                </span>
                <span className={isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}>
                  {words[index].second}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl space-y-6"
        >
          <p className={`text-lg md:text-xl leading-relaxed font-light ${isDarkMode ? 'text-zinc-400' : 'text-zinc-700'}`}>
            Currently a{" "}
            <span className={isDarkMode ? 'text-white' : 'text-zinc-900'}>
              Full Stack Developer
            </span>{" "}
            looking for{" "}
            <span className={`italic border-b ${isDarkMode ? 'border-white/20' : 'border-zinc-300'}`}>
              freelance opportunities
            </span>
          </p>
          <p className={`text-sm md:text-base leading-relaxed max-w-xl ${isDarkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
            Specializing in Full Stack Development with{" "}
            <span className={`font-medium ${isDarkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
              TypeScript
            </span>
            ,{" "}
            <span className={`font-medium ${isDarkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
              Next.js
            </span>
            , and{" "}
            <span className={`font-medium font-serif italic ${isDarkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
              MERN
            </span>
            . Driven by a keen eye for design and a passion for interactive
            aesthetics.
          </p>
        </motion.div>

        {/* Featured Works Section */}
        
      </div>
    </section>
  );
};

export default Hero;
