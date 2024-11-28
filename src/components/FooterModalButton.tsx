'use client'

import { RESUME_DATA } from "@/resumeData";
import { ReactNode, useEffect, useState } from "react";
import Modal from "./Modal";
// import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "./ThemeContext";
import { menuIcon } from "@/assets";
import Image from "next/image";

interface FooterModalButtonInterface {
    image?: boolean;
    children: ReactNode;
}

function getURL(name: string): string {
    // this or (dummy) object is a hotfix for not getting undefined
    const cvObject = RESUME_DATA.contact.find(object => object.name === name) || { name: "#", url: "#" };
    return cvObject.url;
}

export default function FooterModalButton({ image = false, children }: FooterModalButtonInterface) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Set the initial state based on the theme
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    const toggleModal = () => {
        setIsModalOpen(isModalOpen ? false : true);
    };

    return (
        <>
            <button onClick={toggleModal}>
                {image ? (
                    <div className="footer-menu-btn">
                        <Image
                            src={menuIcon}
                            alt="menu icon"
                            width={25}
                            height={25}
                            style={{ filter: isDarkMode ? 'invert(100%)' : 'none' }}
                        />
                    </div>
                ) : (
                    children
                )}
            </button>
            {/* if this conditional code is not here then the .modal-container close thing will make the 
            modal appear even without pressing the button as it is reading for it the whole time*/}
            {isModalOpen && <Modal isOpen={isModalOpen} handleClose={toggleModal}>
                <div className="flex flex-col gap-2 w-2/3 h-auto">
                    <div className="underline font-heading font-bold md:font-semibold">Actions</div>
                    <a href={getURL('CV Document')}><button className="modal-btn">View/Download CV</button></a>
                    <button className="modal-btn" onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
                </div>
                <div className="flex flex-col gap-2 w-2/3 h-auto">
                    <div className="underline font-heading font-bold md:font-semibold">Links</div>
                    {/* <ThemeSwitch className="modal-btn" /> */}
                    {/* <a href={getURL('X')} className="modal-btn">X</a> */}
                    <a href={getURL('GitHub')}><button className="modal-btn">GitHub</button></a>
                    <a href={getURL('LinkedIn')}><button className="modal-btn">LinkedIn</button></a>
                </div>
                <div className="flex flex-col gap-2 w-2/3 h-auto">
                    <div className="underline font-heading font-bold md:font-semibold">Repositories</div>
                    {RESUME_DATA.projects.map((project, index) => (
                        project.repoLink && (
                            <a key={index} href={project.repoLink}><button className="modal-btn">{project.title}</button></a>
                        )
                    ))}
                </div>
            </Modal>}
        </>
    );
}