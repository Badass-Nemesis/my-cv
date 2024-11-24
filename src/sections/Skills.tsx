import Tag from "@/components/Tag";

export default function Skills() {
    return (
        <section className="p-5 block">
            <h1 className="text-xl font-heading font-semibold mb-2">Skills</h1>
            <div className="flex flex-wrap gap-1.5 text-sm tracking-tight font-content">
                <Tag name="Node.js" />
                <Tag name="Express.js" />
                <Tag name="ReactJS" />
                <Tag name="Next.js" />
                <Tag name="TypeScript" />
                <Tag name="JavaScript" />
                <Tag name="Java" />
                <Tag name="MongoDB" />
                <Tag name="MySQL" />
                <Tag name="Firebase" />
                <Tag name="Competitive Programming" />
            </div>
        </section>
    );
}