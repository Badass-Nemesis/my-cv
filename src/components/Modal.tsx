"use client";

import { ReactNode, useEffect } from "react";
import ReactPortal from "./ReactPortal";
import { closeIcon } from "@/assets";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";
import { motion } from 'framer-motion';

interface ModalInterface {
    children: ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

export default function Modal({ children, isOpen, handleClose }: ModalInterface) {
    const { theme } = useTheme(); // Access the current theme

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden"); // for no scrolling
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // for closing using Escape Key
        const closeOnEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };

        // for closing using clicking outside the modal-container area
        const closeOnOutsideClick = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest(".modal-container") === null) {
                handleClose();
            }
        };

        document.body.addEventListener("click", closeOnOutsideClick);
        document.body.addEventListener("keydown", closeOnEscapeKey);

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.body.removeEventListener("keydown", closeOnEscapeKey);
            document.body.removeEventListener("click", closeOnOutsideClick);
        };
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    return (
        <ReactPortal>
            <motion.div className="modal" initial="hidden" animate="visible" exit="hidden" variants={backdropVariants}>
                <motion.div className="modal-container" initial="hidden" animate="visible" exit="hidden" variants={modalVariants}>
                    <button className="modal-close-btn" onClick={handleClose}>
                        <Image
                            src={closeIcon}
                            alt="closeIcon"
                            width={20}
                            height={20}
                            style={{ filter: theme === 'dark' ? 'invert(100%)' : 'none' }}
                        />
                    </button>
                    <div className="flex flex-col items-center justify-start w-full h-full overflow-y-auto gap-5 mt-4">
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </ReactPortal>
    );
}
