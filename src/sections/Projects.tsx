import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Personal Finance App",
            isLive: true,
            liveLink: "#",
            description: "A webapp to manage finances after fetching the Paytm Payments Bank's passbook details from your gmail, using an interactive UI with category options, graph and an OpenAI powered Chatbot to get recommendations.",
            tags: ["Node.js", "Express.js", "ReactJS", "Chart.js", "MongoDB", "Google Apps Script", "Railway", "Netlify/GHpages"]
        },
        {
            title: "Another Project",
            isLive: false,
            description: "Description of another project.",
            tags: ["Tag1", "Tag2"]
        },
        {
            title: "More Projects",
            isLive: false,
            description: "Description of more projects.",
            tags: ["Tag3", "Tag4", "Tag5"]
        },
        {
            title: "More Projects",
            isLive: false,
            description: "Description of more projects.",
            tags: ["Tag3", "Tag4", "Tag5"]
        },
        {
            title: "More Projects",
            isLive: false,
            description: "Description of more projects.",
            tags: ["Tag3", "Tag4", "Tag5"]
        }
    ];

    return (
        <section className="p-5">
            <h1 className="text-lg md:text-lg text-text-heading font-heading font-semibold mb-2">Projects</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {projects.map((project) => (
                    <ProjectCard title={project.title} isLive={project.isLive} liveLink={project.liveLink} description={project.description} tags={project.tags} />
                ))}
            </div>
        </section>
    );
}