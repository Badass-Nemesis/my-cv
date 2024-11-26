'use client'

import { RESUME_DATA } from "@/resumeData";
import { ReactNode, useState } from "react";
import Modal from "./Modal";
// import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "./ThemeContext";

interface FooterModalButtonInterface {
    children: ReactNode;
}

function getURL(name: string): string {
    // this or (dummy) object is a hotfix for not getting undefined
    const cvObject = RESUME_DATA.contact.find(object => object.name === name) || { name: "#", url: "#" };
    return cvObject.url;
}

export default function FooterModalButton({ children }: FooterModalButtonInterface) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleModal = () => {
        setIsModalOpen(isModalOpen ? false : true);
    };

    return (
        <>
            <button onClick={toggleModal}>
                {children}
            </button>
            {/* if this conditional code is not here then the .modal-container close thing will make the 
            modal appear even without pressing the button as it is reading for it the whole time*/}
            {isModalOpen && <Modal isOpen={isModalOpen} handleClose={toggleModal}>
                <div className="flex flex-col gap-2 w-2/3 h-auto">
                    <div className="underline font-heading">Actions</div>
                    <a href={getURL('CV Document')} className="modal-btn">Download CV</a>
                    <button className="modal-btn" onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
                </div>
                <div className="flex flex-col gap-2 w-2/3 h-auto">
                    <div className="underline font-heading">Links</div>
                    {/* <ThemeSwitch className="modal-btn" /> */}
                    {/* <a href={getURL('X')} className="modal-btn">X</a> */}
                    <a href={getURL('GitHub')} className="modal-btn">GitHub</a>
                    <a href={getURL('LinkedIn')} className="modal-btn">LinkedIn</a>
                </div>
            </Modal>}
        </>
    );
}