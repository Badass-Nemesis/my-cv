"use client";

import { useEffect, useState } from 'react';
import { RESUME_DATA } from "@/resumeData";
import ProjectCard from "@/components/ProjectCard";
import { rightArrowIcon } from '@/assets/index';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Projects() {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const initialProjects = 5;

    useEffect(() => {
        setIsDarkMode(theme === "dark");
    }, [theme]);

    return (
        <section className="p-5">
            <h1 className="text-lg md:text-lg text-text-heading font-heading font-bold md:font-semibold mb-2">Projects</h1>
            <motion.div
                className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {RESUME_DATA.projects.slice(0, showMore ? RESUME_DATA.projects.length : initialProjects).map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard
                            title={project.title}
                            isLive={project.isLive}
                            liveLink={project.liveLink}
                            description={project.description}
                            techStack={project.techStack}
                        />
                    </motion.div>
                ))}
                {RESUME_DATA.projects.length > initialProjects && !showMore && (
                    <motion.div className="flex items-end p-2" variants={itemVariants}>
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
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
