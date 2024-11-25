'use client'

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState("light");
    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <button onClick={changeTheme} className="py-2 px-4 bg-red-900 rounded-lg">
            Toggle {theme === 'light' ? "Dark" : "Light"} mode
        </button>
    );
}