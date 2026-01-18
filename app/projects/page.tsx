"use client";

import React from "react";
import Image from "next/image";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Contact from "@/components/contact";

const ProjectsPage = () => {
  return (
    <main className="relative min-h-screen pt-24 pb-6 overflow-hidden font-instrument">


      <div className="max-w-3xl mx-auto px-6 relative">
        <ProjectsHero />
        <ProjectsGrid />
        <div className="mt-8 md:mt-12">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
