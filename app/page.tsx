"use client";
import Navbar from "../components/navbar";
import { motion, Variants } from "framer-motion";
import Plum from "../components/Plum";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import GithubSection from "@/components/githubSection";
import TechStack from "@/components/TechStack";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";


  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen transition-colors duration-700 ${
        isDarkMode
          ? "bg-[#050505] text-white"
          : "bg-white text-slate-900 selection:bg-zinc-100 selection:text-zinc-900"
      } overflow-x-hidden relative`}
    >
      <Plum />
      <Navbar />

      <motion.div variants={itemVariants} className="relative z-50">
        <Header />
      </motion.div>

      <motion.div variants={itemVariants} className="relative z-10">
        <Hero />
      </motion.div>
      <motion.div variants={itemVariants} className="relative z-10">
        <FeaturedSection />
      </motion.div>
      <motion.div variants={itemVariants} className="relative z-10">
        <GithubSection />
      </motion.div>
       <motion.div variants={itemVariants} className="relative z-10">
        <Contact />
      </motion.div>
      <motion.div variants={itemVariants} className="relative z-10">
        <TechStack />
      </motion.div>
      <motion.div variants={itemVariants} className="relative z-10">
        <Footer />
      </motion.div>
     
    </motion.main>
  );
}
