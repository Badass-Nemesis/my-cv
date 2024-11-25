import Image from "next/image";
import {
    githubDarkIcon, githubLightIcon, globeDarkIcon, globeLightIcon,
    linkedinDarkIcon, linkedinLightIcon, mailDarkIcon, mailLightIcon,
    pdfDarkIcon, pdfLightIcon, phoneDarkIcon, phoneLightIcon,
    xDarkIcon, xLightIcon, myPic
} from "@/assets/index"
import IconButton from "@/components/IconButton";

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
                    <a href="#" className="location-link">
                        <Image src={globeLightIcon} alt="globeIcon.svg" width={15} height={15} />
                        <p>Dhanbad, Jharkhand</p>
                    </a>
                </div>
                <div className="flex space-x-1">
                    <IconButton link="#" darkModeIconSrc={mailDarkIcon.src} lightModeIconSrc={mailLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={phoneDarkIcon.src} lightModeIconSrc={phoneLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={githubDarkIcon.src} lightModeIconSrc={githubLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={linkedinDarkIcon.src} lightModeIconSrc={linkedinLightIcon.src} />
                    <IconButton link="#" darkModeIconSrc={pdfDarkIcon.src} lightModeIconSrc={pdfLightIcon.src} />
                </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center w-32 md:w-40">
                <Image src={myPic} alt="myPic.jpg" className="rounded-xl" />
            </div>
        </section>
    );
}