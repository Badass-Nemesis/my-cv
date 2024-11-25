'use client'

import { ReactNode, useState } from "react";
import Modal from "./Modal";

interface FooterModalButtonInterface {
    children: ReactNode;
}

export default function FooterModalButton({ children }: FooterModalButtonInterface) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                Hello Buddy, this is a modal
            </Modal>}
        </>
    );
}