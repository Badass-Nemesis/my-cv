'use client'

import { ReactNode, useState } from "react";
import Modal from "./Modal";
// import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "./ThemeContext";

interface FooterModalButtonInterface {
    children: ReactNode;
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
                    <button className="modal-btn">Print</button>
                    <button className="modal-btn" onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
                </div>
                <div className="flex flex-col gap-2 w-2/3 h-auto">
                    <div className="underline font-heading">Links</div>
                    {/* <ThemeSwitch className="modal-btn" /> */}
                    <button className="modal-btn">X</button>
                    <button className="modal-btn">GitHub</button>
                    <button className="modal-btn">LinkedIn</button>
                </div>
            </Modal>}
        </>
    );
}