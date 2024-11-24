interface CardPropsInterface {
    title: string;
    description: string;
    tags?: string[]; // this is optional as tags can be 0, but are they?
}

function Card({ title, description, tags = [] }: CardPropsInterface) {
    return (
        <div className="bg-green-600 p-3 rounded-lg flex flex-col">
            <div className="flex items-center mb-2">
                <a href="#">
                    <h1 className="font-semibold hover:underline">{title}</h1>
                </a>
                <span className="bg-green-900 ml-1 w-1.5 h-1.5 rounded-full animate-pulse"></span>
            </div>
            <p className="text-xs mb-2">
                {description}
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
                {tags.map((tag, index) => (
                    <div key={index} className="bg-green-700 inline-block rounded-lg px-4 py-0.5">{tag}</div>
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "Personal Finance App",
            description: "A webapp to manage finances after fetching the Paytm Payments Bank's passbook details from your gmail, using an interactive UI with category options, graph and an OpenAI powered Chatbot to get recommendations.",
            tags: ["Node.js", "Express.js", "ReactJS", "Chart.js", "MongoDB", "Google Apps Script", "Railway.app/Netlify/GHpages"]
        },
        {
            title: "Another Project",
            description: "Description of another project.",
            tags: ["Tag1", "Tag2"]
        },
        {
            title: "More Projects",
            description: "Description of more projects.",
            tags: ["Tag3", "Tag4", "Tag5"]
        },
        {
            title: "More Projects",
            description: "Description of more projects.",
            tags: ["Tag3", "Tag4", "Tag5"]
        },
        {
            title: "More Projects",
            description: "Description of more projects.",
            tags: ["Tag3", "Tag4", "Tag5"]
        }
    ];

    return (
        <section className="bg-green-700 p-5">
            <h1 className="text-lg font-semibold mb-2">Projects</h1>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <Card key={index} title={project.title} description={project.description} tags={project.tags} />
                ))}
            </div>
        </section>
    );
}