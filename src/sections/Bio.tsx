import Image from "next/image";
import {
    githubDarkIcon, githubLightIcon, globeDarkIcon, globeLightIcon,
    linkedinDarkIcon, linkedinLightIcon, mailDarkIcon, mailLightIcon,
    pdfDarkIcon, pdfLightIcon, phoneDarkIcon, phoneLightIcon,
    xDarkIcon, xLightIcon, myPic
} from "@/assets/index"

export default function Bio() {
    return (
        <section className="flex p-5 justify-between font-content">
            <div className="block">
                <div className="flex items-baseline mb-1">
                    <div className="inline-block text-3xl font-heading font-bold relative">
                        Harshit Anant
                        <button className="bg-gray-800 rounded-md px-2 py-0.5 text-xs font-content tracking-widest absolute right-1 bottom-1 transform translate-x-24 hover:scale-110 hover:bg-gray-600 duration-500">
                            Hire Me!
                        </button>
                    </div>
                </div>
                <div className="tracking-tighter text-gray-300 mb-1">
                    Full Stack Developer focused on learning through experimentation and product development.
                    I like to build webapps which makes life easier.
                </div>
                <div className="inline-block">
                    <a href="#" className="flex items-center hover:underline text-xs tracking-wider space-x-1 mb-2 hover:scale-110 hover:text-gray-300 duration-500">
                        <Image src={globeLightIcon} alt="globeIcon.svg" width={15} height={15} />
                        <p>Dhanbad, Jharkhand</p>
                    </a>
                </div>
                <div className="flex space-x-1">
                    <button className="border border-gray-500 rounded-md p-1 transform hover:scale-110 duration-500"><Image src={mailDarkIcon} alt="mailIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1 transform hover:scale-110 duration-500"><Image src={phoneDarkIcon} alt="phoneIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1 transform hover:scale-110 duration-500"><Image src={githubDarkIcon} alt="githubIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1 transform hover:scale-110 duration-500"><Image src={linkedinDarkIcon} alt="linkedinIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1 transform hover:scale-110 duration-500"><Image src={pdfDarkIcon} alt="pdfIcon.svg" width={20} height={20} /></button>

                </div>
            </div>
            <div className="flex justify-center items-center w-96">
                <Image src={myPic} alt="myPic.jpg" className="rounded-xl" />
            </div>
        </section>
    );
}