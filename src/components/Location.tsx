'use client'

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
        <a href="#" className="location-link">
            <Image
                src={globeIcon}
                alt="globeIcon.svg"
                width={15} height={15}
                style={{ filter: isDarkMode ? 'invert(100%)' : 'none' }}
            />
            <p>Dhanbad, Jharkhand</p>
        </a>
    );
}