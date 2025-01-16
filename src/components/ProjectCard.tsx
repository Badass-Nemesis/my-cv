import Tag from "./Tag";

interface ProjectCardInterface {
    title: string;
    isLive: boolean;
    liveLink?: string;
    description: string;
    techStack: readonly string[]; // added readonly because it was causing type error in Projects file
}

// putting tags = [] so that tags.map doesn't give undefined error
export default function ProjectCard({ title, isLive, liveLink, description, techStack = [] }: ProjectCardInterface) {
    return (
        <div className="border border-gray-600 p-3 rounded-lg flex flex-col h-full">
            <div className="flex items-center mb-2">
                {isLive ? (
                    <div className="flex flex-row items-center">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            <h1 className="project-heading-live font-bold md:font-semibold text-[0.9375rem] md:text-base">{title}</h1>
                        </a>
                        <div className="bg-pulse-color ml-1.5 w-1.5 h-1.5 rounded-full animate-pulse"></div>
                    </div>
                ) : (
                    <h1 className="project-heading font-bold md:font-semibold text-[0.9375rem] md:text-base">{title}</h1>
                )}
            </div>
            <p className="font-content text-xs text-text-content mb-4">
                {description}
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs tracking-tighter font-content mt-auto">
                {techStack.map((stack, index) => (
                    <Tag name={stack} key={index} /> // this is basically prop-drilling. I need to fix this
                ))}
            </div>
        </div>
    );
}