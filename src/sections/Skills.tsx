import Tag from "@/components/Tag";

export default function Skills() {
    return (
        <section className="p-5 block">
            <h1 className="text-lg md:text-xl text-text-heading font-heading font-semibold mb-2">Skills</h1>
            <div className="flex flex-wrap gap-1.5 text-xs md:text-sm tracking-tight font-content">
                <Tag name="Node.js" skillsTag={true} />
                <Tag name="Express.js" skillsTag={true} />
                <Tag name="ReactJS" skillsTag={true} />
                <Tag name="Next.js" skillsTag={true} />
                <Tag name="TypeScript" skillsTag={true} />
                <Tag name="JavaScript" skillsTag={true} />
                <Tag name="Tailwind CSS" skillsTag={true} />
                <Tag name="Java" skillsTag={true} />
                <Tag name="MongoDB" skillsTag={true} />
                <Tag name="MySQL" skillsTag={true} />
                <Tag name="Firebase" skillsTag={true} />
                <Tag name="Competitive Programming" skillsTag={true} />
            </div>
        </section>
    );
}