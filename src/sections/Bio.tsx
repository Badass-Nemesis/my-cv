import { RESUME_DATA } from "@/resumeData";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import Location from "@/components/Location";

function getURL(name: string): string {
    // this or (dummy) object is a hotfix for not getting undefined
    const cvObject = RESUME_DATA.contact.find(object => object.name === name) || { name: "#", url: "#" };
    return cvObject.url;
}

export default function Bio() {
    return (
        <section className="flex p-5 justify-between font-content">
            <div className="block mr-0.5 md:mr-4">
                <div className="inline-block md:max-w-[450px] lg:max-w-[540px] items-center text-xl text-text-heading md:text-3xl font-heading font-bold mb-1">
                    {RESUME_DATA.name}
                    {RESUME_DATA.hireMe && <a href={getURL("Mail")}>
                        <button className="hire-me-btn text-text-content">
                            Hire Me!
                        </button>
                    </a>}
                </div>
                <div className="tracking-tighter text-sm md:text-base text-text-content mb-1">
                    {RESUME_DATA.about}
                </div>
                <div className="inline-block">
                    <Location />
                </div>
                <div className="flex space-x-1">
                    {RESUME_DATA.contact.map((singleContact, index) => (
                        <IconButton
                            key={index}
                            link={singleContact.url}
                            iconSrc={singleContact.icon.src}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center w-32 md:w-40">
                <Image src={RESUME_DATA.avatar} alt="myPic.jpg" className="rounded-xl" />
            </div>
        </section>
    );
}