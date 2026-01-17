import React from "react";
import { useTheme } from "@/context/ThemeContext";
import ShinyText from "./ShinyText";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { FaFilePdf, FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const socials = [
    {
      name: "Github",
      icon: (
        <Github
          stroke={isDarkMode ? "white" : "black"}
          strokeWidth={1}
          size={20}
        />
      ),
      link: "https://github.com/Harshshah3475",
      color:
        "group-hover:text-zinc-400 group-hover:border-zinc-400/20 bg-zinc-500/5 hover:bg-zinc-500/10",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter className="text-zinc-500" />,
      link: "https://x.com/harsh13__8",
      color:
        "group-hover:text-blue-400 group-hover:border-blue-400/20 bg-blue-500/5 hover:bg-blue-500/10",
    },
    {
      name: "Linkedin",
      icon: (
        <Linkedin
          stroke={isDarkMode ? "white" : "black"}
          strokeWidth={1}
          size={20}
        />
      ),
      link: "www.linkedin.com/in/harsh-kumar-279a56296",
      color:
        "group-hover:text-pink-400 group-hover:border-pink-400/20 bg-pink-500/5 hover:bg-pink-500/10",
    },
    {
      name: "Mail",
      icon: (
        <Mail
          stroke={isDarkMode ? "white" : "black"}
          strokeWidth={1}
          size={20}
        />
      ),
      link: "mailto:hk493726@gmail.com",
      color:
        "group-hover:text-green-400 group-hover:border-green-400/20 bg-green-500/5 hover:bg-green-500/10",
    },
  ];

  const connect = [
    {
      name: "WhatsApp",
      link: "https://wa.me/6395561946",
      color:
        "group-hover:text-green-400 group-hover:border-green-400/20 bg-green-500/5 hover:bg-green-500/10",
      icon: <FaWhatsapp className="text-green-500" />,
    },
    {
      name: "Resume",
      link: "/harshkumarresume_1765893706.pdf",
      color:
        "group-hover:text-green-400 group-hover:border-green-400/20 bg-green-500/5 hover:bg-green-500/10",
      icon: <FaFilePdf className="text-red-500" />,
    },
  ];
  return (
    <div
     className={`max-w-2xl mx-auto px-6 py-2 ${
          isDarkMode ? "border-white/5" : "border-black/5"
        } border-b pb-12`}
    >
      <div className="pt-12 pb-4">
        <p
          className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-2 ${
            isDarkMode ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          Get in touch
        </p>
        <div className="items-baseline gap-4">
          <h3
            className={`text-3xl md:text-4xl font-serif italic ${
              isDarkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            Let's build something
          </h3>
          <ShinyText
            className={`text-3xl md:text-4xl font-serif italic tracking-tight ${
              isDarkMode ? "text-black" : "text-zinc-500"
            }`}
            text="Extraordinary together"
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-6 md:gap-16 mb-8">
          {connect.map((social) => (
            <div key={social.name}>
              <p
                className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mt-4 ml-2 mb-4 ${
                  isDarkMode ? "text-zinc-600" : "text-zinc-400"
                }`}
              >
                {social.name}
              </p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.link}
                    target="_blank"
                    key={social.name}
                    className={`group relative flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${social.color}`}
                  >
                    <p>{social.icon}</p>
                    <p
                      className={`text-xs md:text-sm font-semibold ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {/* do this later */}
                      {social.name}
                    </p>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
        <div>
          <p
            className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mt-4 ml-2 ${
              isDarkMode ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            Socials
          </p>
          <div className="flex flex-wrap justify-between gap-3 md:gap-4 mt-4">
            {socials.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <a
                    href={social.link}
                    target="_blank"
                    key={social.name}
                    className={`group max-w-[96px] relative flex items-center gap-2 md:gap-2.5 px-3 md:px-5 py-2 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden flex-1 md:flex-initial min-w-fit ${social.color}`}
                  >
                    <p>{social.icon}</p>
                    <p
                      className={`text-xs font-semibold ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {/* do this later */}
                      {social.name}
                    </p>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
