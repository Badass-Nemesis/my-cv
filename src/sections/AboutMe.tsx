import { RESUME_DATA } from "@/resumeData";

export default function AboutMe() {
    return (
        <section className="p-5">
            <h1 className="font-heading text-text-heading text-lg md:text-xl font-semibold mb-2">
                About Me
            </h1>
            <p className="font-content text-text-content text-sm md:text-base tracking-tight text-gray-300">
                {RESUME_DATA.summary}
            </p>
        </section>
    );
}