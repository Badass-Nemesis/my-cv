import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalInterface {
    children: ReactNode;
    // wrapperID: string;
}

const createWrapperAndAppendToBody = (wrapperID: string): HTMLElement => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperID);

    const parentElement = document.getElementById('body-wala');
    if (parentElement) {
        parentElement.appendChild(wrapperElement);
    } else {
        console.error("Element with id 'body-wala' not found.");
    }

    return wrapperElement;
}

export default function ReactPortal({ children }: ReactPortalInterface) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const element = createWrapperAndAppendToBody("react-portal-wrapper");;
        const systemCreated = true;

        setWrapperElement(element);

        return () => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, []);

    // ensureing that the portal is only created when the wrapperElement is ready
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}