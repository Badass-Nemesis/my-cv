import { ReactNode, useEffect } from "react";
import ReactPortal from "./ReactPortal";
import { closeIcon } from "@/assets";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";
// import IconButton from "./IconButton";

interface ModalInterface {
    children: ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

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
            <div className="modal">
                <div className="modal-container">
                    <div className="fixed translate-x-40 md:translate-x-48 lg:translate-x-56 -translate-y-3 z-50">
                        {/* ha */}
                        <button className="modal-close-btn" onClick={handleClose}>
                            <Image
                                src={closeIcon}
                                alt="closeIcon"
                                style={{ filter: theme === 'dark' ? 'invert(100%)' : 'none' }}
                            />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </ReactPortal>
    );
}
