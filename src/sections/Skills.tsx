import { RESUME_DATA } from "@/resumeData";
import Tag from "@/components/Tag";

export default function Skills() {
    return (
        <section className="p-5 block">
            <h1 className="text-lg md:text-xl text-text-heading font-heading font-bold md:font-semibold mb-2">Skills</h1>
            <div className="flex flex-wrap gap-1.5 text-[0.83rem] md:text-[0.9rem] tracking-tight font-content font-medium">
                {RESUME_DATA.skills.map((skill, index) => {
                    return (
                        <Tag key={index} name={skill} skillsTag={true} />
                    );
                })}
            </div>
        </section>
    );
}