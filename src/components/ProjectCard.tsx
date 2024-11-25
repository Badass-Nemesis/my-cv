import Tag from "./Tag";

interface ProjectCardInterface {
    title: string;
    isLive: boolean;
    liveLink?: string;
    description: string;
    tags?: string[];
}

// putting tags = [] so that tags.map doesn't give undefined error
export default function ProjectCard({ title, isLive, liveLink, description, tags = [] }: ProjectCardInterface) {
    return (
        <div className="border border-gray-600 p-3 rounded-lg">
            <div className="flex items-center mb-2">
                {isLive ? (
                    <div className="flex flex-row items-center">
                        <a href={liveLink}>
                            <h1 className="project-heading-live">{title}</h1>
                        </a>
                        <div className="bg-pulse-color ml-1.5 w-1.5 h-1.5 rounded-full animate-pulse"></div>
                    </div>
                ) : (
                    <h1 className="project-heading">{title}</h1>
                )}
            </div>
            <p className="font-content text-xs text-text-content mb-2">
                {description}
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs tracking-tighter font-content">
                {tags.map((tag) => (
                    <Tag name={tag} /> // this is basically prop-drilling. I need to fix this
                ))}
            </div>
        </div>
    );
}