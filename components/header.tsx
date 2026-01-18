import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../public/dp.png";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const bannerImg =
    "https://i.pinimg.com/originals/51/2f/c3/512fc362a4ca2663778db016c2b7f703.gif";

  return (
    <section className="max-w-3xl mx-auto px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-full h-56 md:h-50 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img
            src={bannerImg}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-14 left-8 md:left-8"
        >
          <div className="relative group">
            <div
              className={`w-25 h-25 md:w-40 md:h-40 rounded-full border-[6px] ${
                isDarkMode ? "border-black" : "border-white"
              } overflow-hidden bg-[#1A1A1A] shadow-2xl`}
            >
              <Image
                src={avatarImg}
                alt="Harsh Kumar"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div
              className={`absolute inset-0 rounded-full ${
                isDarkMode ? "bg-white/5" : "bg-black/5"
              } blur-2xl -z-10`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Status Badge */}
      <div className="flex justify-end mt-4">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${
            isDarkMode
              ? "border-white/5 bg-white/[0.02]"
              : "border-zinc-200 bg-white/40"
          } backdrop-blur-md shadow-sm`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span
            className={`text-[6px] md:text-[11px] font-medium tracking-[0.15em] uppercase ${
              isDarkMode ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            Available for work
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
