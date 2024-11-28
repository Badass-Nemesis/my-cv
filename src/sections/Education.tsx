import { RESUME_DATA } from "@/resumeData";

export default function Education() {
    return (
        <section className="block p-5">
            <h1 className="text-lg text-text-heading md:text-xl font-heading font-bold md:font-semibold mb-2">
                Education
            </h1>
            {RESUME_DATA.education.map((singleEducation, index) => {
                return (<div key={index} className="education">
                    <div className="flex justify-between items-center text-base text-edu-heading md:text-lg mb-2">
                        <h1 className="font-heading font-bold md:font-semibold">
                            {singleEducation.school}
                        </h1>
                        <h1 className="font-content text-sm">{singleEducation.start} - {singleEducation.end}</h1>
                    </div>
                    <p className="font-content tracking-tight text-text-content text-sm md:text-base">
                        {singleEducation.degree}
                    </p>
                </div>);
            })}
        </section>
    );
}