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
            <div className="block">
                <div className="flex items-baseline mb-1">
                    <div className="inline-block text-3xl font-heading font-bold relative">
                        Harshit Anant
                        <button className="hire-me-btn">
                            Hire Me!
                        </button>
                    </div>
                </div>
                <div className="tracking-tighter text-gray-300 mb-1">
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
            <div className="flex justify-center items-center w-96">
                <Image src={myPic} alt="myPic.jpg" className="rounded-xl" />
            </div>
        </section>
    );
}