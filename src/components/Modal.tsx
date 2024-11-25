import { ReactNode, useEffect } from "react";
import ReactPortal from "./ReactPortal";
import ThemeSwitch from "./ThemeSwitch";

interface ModalInterface {
    children: ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }: ModalInterface) {
    useEffect(() => {
        if (isOpen && isOpen === true) {
            document.body.classList.add("overflow-hidden"); // for no scrolling
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
        }

        document.body.addEventListener("click", closeOnOutsideClick);
        document.body.addEventListener("keydown", closeOnEscapeKey);

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.body.removeEventListener("keydown", closeOnEscapeKey);
            document.body.removeEventListener("click", closeOnOutsideClick);
        }
    }, [handleClose])

    if (!isOpen) return null;

    return (
        <ReactPortal>
            <div className="modal" >
                <div className="modal-container ">
                    <button className="modal-close-btn " onClick={handleClose}>
                        Close
                    </button>
                    {children}
                    <ThemeSwitch />
                </div>
            </div>
        </ReactPortal >
    );
}