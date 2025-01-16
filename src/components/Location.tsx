'use client'

import { RESUME_DATA } from "@/resumeData";
import Image from "next/image";
import { globeIcon } from "@/assets";
import { useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";

export default function Location() {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(theme === 'dark');
    }, [theme])

    return (
        <a href={RESUME_DATA.locationLink} className="location-link" target="_blank" rel="noopener noreferrer">
            <Image
                src={globeIcon}
                alt="globeIcon.svg"
                width={15}
                height={15}
                style={{ filter: isDarkMode ? 'invert(100%)' : 'none' }}
            />
            <p>{RESUME_DATA.location}</p>
        </a>
    );
}