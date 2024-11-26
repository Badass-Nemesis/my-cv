// 'use client';

// import { useEffect, useState, useRef } from 'react';

// export default function ThemeSwitch() {
//     const [theme, setTheme] = useState('light');
//     const isMounted = useRef(false);

//     useEffect(() => {
//         if (!isMounted.current) {
//             const savedTheme = localStorage.getItem('theme') || 'light';
//             setTheme(savedTheme);
//             document.documentElement.classList.add(savedTheme);
//             isMounted.current = true;
//             console.log("this savedTheme code just ran and changed to " + savedTheme);
//         }
//     }, []);

//     useEffect(() => {
//         if (isMounted.current) {
//             localStorage.setItem('theme', theme);
//             document.documentElement.classList.remove('light', 'dark');
//             document.documentElement.classList.add(theme);
//             console.log("this theme code just ran and changed to " + theme);
//         }
//     }, [theme]);

//     const changeTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//     };

//     return (
//         <button onClick={changeTheme} className="py-2 px-4 bg-red-900 rounded-lg">
//             Toggle {theme === 'light' ? 'Dark' : 'Light'} mode
//         </button>
//     );
// }


// changed code because opening the modal was causing issues
import React from 'react';
import { useTheme } from './ThemeContext';

interface ThemeSwitchInterface {
    className?: string;
}

export default function ThemeSwitch({ className = "" }: ThemeSwitchInterface) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={className} >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} mode
        </button >
    );
}
