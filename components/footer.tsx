"use client";
import React from "react";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 my-12">
      {/* Quote Section with Background GIF */}
      <div className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
        {/* GIF Background */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}
        >
          <img
            src="https://i.pinimg.com/originals/10/a3/04/10a304e823c4c7e5a18b773e0bfd96fc.gif"
            alt="Background"
            className="w-full h-full object-cover opacity-60 md:opacity-60 dark:opacity-40 dark:md:opacity-40 grayscale"
          />
          {/* Subtle Overlay to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white dark:from-zinc-950 dark:via-zinc-950/80 dark:to-zinc-950 opacity-30 md:opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 pt-6 text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-[16px] md:text-3xl text-black dark:text-white leading-tight tracking-tight"
          >
            "Movement is life; stillness is death."
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <span className="font-serif italic text-[12px] md:text-lg text-black dark:text-zinc-200 tracking-wide">
            — Anonymous
          </span>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
        }}
        className="flex mt-16 flex-col md:flex-row justify-between items-center gap-4 text-[8px] text-zinc-400 dark:text-zinc-500 font-inter tracking-wide transition-colors pb-8 px-4 md:px-6"
      >

        <div className="uppercase flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
          <span className="font-light">Developed by</span>
          <a href="https://github.com/Harshshah3475" target="_blank" rel="noopener noreferrer" className="font-serif italic text-[12px] text-zinc-900 dark:text-zinc-100 capitalize font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-zinc-800 dark:after:bg-zinc-200 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left cursor-pointer">
            Harsh Kumar shah
          </a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
