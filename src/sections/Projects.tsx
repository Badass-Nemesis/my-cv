"use client";

import { useEffect, useState } from 'react';
import { RESUME_DATA } from "@/resumeData";
import ProjectCard from "@/components/ProjectCard";
import { rightArrowIcon } from '@/assets/index';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';

export default function Projects() {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const initialProjects = 5;

    useEffect(() => {
        setIsDarkMode(theme === "dark");
    }, [theme])
    // no need for 

    return (
        <section className="p-5">
            <h1 className="text-lg md:text-lg text-text-heading font-heading font-bold md:font-semibold mb-2">Projects</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {RESUME_DATA.projects.slice(0, showMore ? RESUME_DATA.projects.length : initialProjects).map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        isLive={project.isLive}
                        liveLink={project.liveLink}
                        description={project.description}
                        techStack={project.techStack}
                    />
                ))}
                {RESUME_DATA.projects.length > initialProjects && !showMore && (
                    <div className="flex items-end p-2">
                        <button
                            onClick={() => setShowMore(true)}
                            className="inline-flex text-text-content hover:text-text-content-hover text-xs rounded underline decoration-dotted gap-0.5"
                        >
                            More Projects
                            <Image
                                src={rightArrowIcon}
                                alt="right arrow"
                                width={15}
                                height={15}
                                style={{ filter: isDarkMode ? "invert(100%)" : "none" }}
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}