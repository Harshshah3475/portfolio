"use client";

import React from "react";
import { projects } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 md:gap-y-24 mt-12 md:mt-20">
      {projects.map((project, idx) => (
        <ProjectCard key={project.id} project={project} index={idx} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
