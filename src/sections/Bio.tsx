import Image from "next/image";
import {
    githubIcon, globeIcon, linkedinIcon, mailIcon,
    pdfIcon, phoneIcon, xIcon, myPic
} from "@/assets/index"
import IconButton from "@/components/IconButton";
import Location from "@/components/Location";

export default function Bio() {
    return (
        <section className="flex p-5 justify-between font-content">
            <div className="block mr-0.5 md:mr-4">
                <div className="inline-block md:max-w-[450px] lg:max-w-[540px] items-center text-xl text-text-heading md:text-3xl font-heading font-bold mb-1">
                    Harshit Anant
                    <button className="hire-me-btn text-text-content">
                        Hire Me!
                    </button>
                </div>
                <div className="tracking-tighter text-sm md:text-base text-text-content mb-1">
                    Full Stack Developer focused on learning through experimentation and product development.
                    I like to build webapps which makes life easier.
                </div>
                <div className="inline-block">
                    <Location />
                </div>
                <div className="flex space-x-1">
                    {/* <IconButton link="#" darkModeIconSrc={mailDarkIcon.src} lightModeIconSrc={mailLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={phoneDarkIcon.src} lightModeIconSrc={phoneLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={githubDarkIcon.src} lightModeIconSrc={githubLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={linkedinDarkIcon.src} lightModeIconSrc={linkedinLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={pdfDarkIcon.src} lightModeIconSrc={pdfLightIcon.src} /> */}
                    <IconButton link="#" iconSrc={mailIcon.src} />
                    <IconButton link="#" iconSrc={phoneIcon.src} />
                    <IconButton link="#" iconSrc={githubIcon.src} />
                    <IconButton link="#" iconSrc={linkedinIcon.src} />
                    <IconButton link="#" iconSrc={pdfIcon.src} />
                </div>

            </div>
            <div className="flex flex-shrink-0 justify-center items-center w-32 md:w-40">
                <Image src={myPic} alt="myPic.jpg" className="rounded-xl" />
            </div>
        </section>
    );
}