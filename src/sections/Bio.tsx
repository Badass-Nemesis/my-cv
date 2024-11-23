import Image from "next/image";
import {
    githubDarkIcon, githubLightIcon, globeDarkIcon, globeLightIcon,
    linkedinDarkIcon, linkedinLightIcon, mailDarkIcon, mailLightIcon,
    pdfDarkIcon, pdfLightIcon, phoneDarkIcon, phoneLightIcon,
    xDarkIcon, xLightIcon, myPic
} from "@/assets/index"

export default function Bio() {
    return (
        <section className="flex bg-green-700 p-5 justify-between rounded-xl">
            <div className="block">
                <div className="flex mb-1 relative">
                    <div className="text-3xl mr-3 font-bold">
                        Harshit Anant
                    </div>
                    <button className="bg-gray-300 rounded-md px-2 py-0.5 text-xs tracking-widest absolute bottom-1 left-52">
                        Hire Me!
                    </button>
                </div>
                <div className="tracking-wider mb-1">
                    Full Stack Developer focused on learning through experimentation and product development.
                    I like to build webapps which makes life easier.
                </div>
                <a href="#" className="flex items-center hover:underline text-xs tracking-wider mb-2 space-x-1 w-36">
                    <Image src={globeLightIcon} alt="globeIcon.svg" width={15} height={15} />
                    <p>Dhanbad, Jharkhand</p>
                </a>
                <div className="flex space-x-1">
                    <button className="border border-gray-500 rounded-md p-1"><Image src={mailLightIcon} alt="mailIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1"><Image src={phoneLightIcon} alt="phoneIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1"><Image src={githubLightIcon} alt="githubIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1"><Image src={linkedinLightIcon} alt="linkedinIcon.svg" width={20} height={20} /></button>
                    <button className="border border-gray-500 rounded-md p-1"><Image src={pdfLightIcon} alt="pdfIcon.svg" width={20} height={20} /></button>

                </div>
            </div>
            <div className="flex justify-center items-center w-96">
                <Image src={myPic} alt="myPic.jpg" className="rounded-xl" />
            </div>
        </section>
    );
}