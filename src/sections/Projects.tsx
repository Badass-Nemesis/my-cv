import { RESUME_DATA } from "@/resumeData";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section className="p-5">
            <h1 className="text-lg md:text-lg text-text-heading font-heading font-semibold mb-2">Projects</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {RESUME_DATA.projects.map((project, index) => (
                    <ProjectCard title={project.title} isLive={project.isLive} liveLink={project.liveLink}
                        description={project.description} techStack={project.techStack} key={index} />
                ))}
            </div>
        </section>
    );
}